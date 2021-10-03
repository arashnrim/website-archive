import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const Placeholder = () => (
  <div className="justify-center items-center flex flex-col lg:flex-row min-h-screen min-w-screen m-10 gap-12 text-center lg:text-left">
    <FontAwesomeIcon icon={faWrench} size="8x" />
    <div className="flex flex-col lg:w-1/3 space-y-5">
      <h1 className="text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl font-heading font-semibold">
        All&#39;s a work in progress.
      </h1>
      <p className="text-xl sm:text-2xl">
        This website is in active development, and it may take a while for this
        page to be ready. Hold on to your seatbelts!
      </p>
    </div>
  </div>
);

export default Placeholder;
