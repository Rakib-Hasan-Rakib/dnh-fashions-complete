import React from 'react';
import './SectionTitle.css'

const SectionTitle = (title,subTitle) => {
    return (
      <div className="section-title-div text-center my-8 md:my-16 capitalize">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-amber-400 font-bold tracking-widest">
          {title}
        </h1>
        <p className="italic text-gray-8000 md:text-lg md:my-1 font-semibold">
          {subTitle}
        </p>
      </div>
    );
};

export default SectionTitle;