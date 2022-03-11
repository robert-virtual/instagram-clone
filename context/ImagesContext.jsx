import { createContext } from "react";
import { getAssetsAsync, usePermissions } from "expo-media-library";
import { useState, useEffect } from "react";

export const ImagesContext = createContext({ photos: [], cargando: true });

export function ImagesProvider({ children }) {
  const [cargando, setCargando] = useState(true);
  const [status, requestPermission] = usePermissions();
  const [photos, setPhotos] = useState([]);

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
      res = await getAssetsAsync({
        mediaType: "photo",
        first: res.totalCount / 2,
      });
      console.log("imagenes cargadas");
      setCargando(false);
      setPhotos(res.assets.reverse());
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <ImagesContext.Provider value={{ cargando, photos }}>
      {children}
    </ImagesContext.Provider>
  );
}
