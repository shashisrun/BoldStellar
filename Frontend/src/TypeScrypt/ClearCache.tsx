import * as React from "react";
 
import { useClearCache } from "react-clear-cache";
 
const ClearCache: React.FC<{}> = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCache();
  return (
    <div>
      {!isLatestVersion && (
        <p>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              emptyCacheStorage();
            }}
          >
            Update version
          </a>
        </p>
      )}
    </div>
  );
};
 
export default ClearCache;