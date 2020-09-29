import React, { useRef, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import College from "./College";
import UseColleges from "./UseColleges";
import loadingGif from "./images/loading.gif";
export default function CollegesList() {
  const [start, setstart] = useState(0);
  const { colleges, more, loading } = UseColleges(start);
  // console.log(colleges, "colleges");
  const observer = useRef();
  const lastCollegeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && more) {
          setstart((prev) => prev + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [more, loading]
  );
  return (
    <div className="CollegesList">
      {colleges.map((college, index) => {
        if (colleges.length === index + 1) {
          return (
            <College
              collegeRef={lastCollegeRef}
              college={college}
              key={uuidv4()}
            />
          );
        } else {
          return <College college={college} key={uuidv4()} />;
        }
      })}
      {loading && (
        <div className="loading">
          <img src={loadingGif} alt="loading" />
        </div>
      )}
    </div>
  );
}
