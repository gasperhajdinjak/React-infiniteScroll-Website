import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { mylinks } from "./mylinks";

const Links = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {mylinks.map((link, index) => (
        <div key={index}>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1
              className='py-7 flex justify-between items-center md:pr-0 pr-5 group'
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
              {link.name}
              <span className='text-xxl md:hidden inline'>
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}></ion-icon>
              </span>
              <span className='text-xxl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                <ion-icon name='chevron-down'></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className='absolute top-20 hidden group-hover:md:block right-10 w-50 hover:md:block'>
                  <div className='py-3'>
                    <div
                      className='absolute bg-white w-4 h-4 left-1  
                    mt-1  rotate-45'></div>
                  </div>
                  <div className='grid grid-cols-6 gap-14 bg-white p-10 '>
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className='text-lg font-semibold'>
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className='text-sm text-gray-600 my-3'>
                            <NavLink to={slink.link}>{slink.name}</NavLink>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}>
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className='flex justify-between items-center py-4 pl-7 font-semibold md:pr-0 pr-5 '>
                    {slinks.Head}

                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}>
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className='py-3 pl-14'>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Links;
