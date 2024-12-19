import { useState, useEffect, useCallback } from "react";

function useLocalScript(scriptName) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [moduleInstance, setModuleInstance] = useState(null);

  const loadScript = useCallback(async () => {
    try {
      const module = await import(`./game.js`);
      if (module && typeof module.default === "function") {
        const instance = module.default();
        setModuleInstance(instance);
      }
      setLoaded(true);
      setError(null);
    } catch (err) {
      setError(err);
      setLoaded(false);
    }
  }, []);

  useEffect(() => {
    if (!loaded && !error) {
      loadScript();
    }

    return () => {
      if (moduleInstance && typeof moduleInstance.cleanup === "function") {
        moduleInstance.cleanup();
      }
    };
  }, [loaded, error, loadScript, moduleInstance]);

  return { loaded, error, loadScript };
}

export default useLocalScript;
