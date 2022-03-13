import { createContext } from "react";
import { getAssetsAsync, usePermissions } from "expo-media-library";
import { useState, useEffect } from "react";

export const ImagesContext = createContext({
  photos: [],
  cargando: true,
  totalCount: 0,
});

export function ImagesProvider({ children }) {
  const [cargando, setCargando] = useState(true);
  const [status, requestPermission] = usePermissions();
  const [photos, setPhotos] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    console.log("status changed");
    if (!status) {
      console.log("requestPermission");
      requestPermission();
      return;
    }
    console.log("getAssets");
    getAssets();
  }, [status]);

  async function getAssets() {
    try {
      let res = await getAssetsAsync({ mediaType: "photo" });
      console.log("primeras 20 imagenes cargadas");
      setPhotos(res.assets.reverse());
      setTotalCount(res.totalCount);
      res = await getAssetsAsync({
        mediaType: "photo",
        first: Math.round(res.totalCount / 2),
      });
      setPhotos((prev) => prev.concat(res.assets.reverse()));
      setCargando(false);

      console.log("todas las imagenes cargadas");
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <ImagesContext.Provider value={{ cargando, photos, totalCount }}>
      {children}
    </ImagesContext.Provider>
  );
}
