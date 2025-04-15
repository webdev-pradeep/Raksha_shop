import React from "react";

const productPage = () => {
  return (
    <>
      <div className="md:h-screen md:w-screen md:flex md:pt-18 md:pb-8 md:pl-5 md:pr-5 pt-18  grid grid-cols-1   ">
        <div className="md:w-[100%] md:h-[100%] md:border-1 md:border-black/50 md:flex w-[100%] shadow-2xl shadow-white grid grid-cols-1 ">
          <ul className="md:w-[20%] md:h-[100%] md:p-2 md:grid md:grid-cols-1 md:gap-1 flex gap-2 h-30 w-[100%] p-3">
            <li>
              <img
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/speaker/smart-speaker/5/p/a/m3-portable-bluetooth-mini-speaker-dynamic-metal-sound-with-high-original-imah5ghbz6tqn68z.jpeg?q=70&crop=false"
                alt=""
                srcset=""
                className="md:h-[100%] md:w-[100%]  hover:border-2 hover:p-2 hover:border-red-700 object-contain  "
              />
            </li>
            <li>
              <img
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/speaker-mobile-mod/v/u/0/1-mini-boost-4d-metal-bluetooth-wireless-speaker-colorful-small-original-imagvfwggbyx6zxh.jpeg?q=70&crop=false"
                alt=""
                srcset=""
                className="md:h-[100%] md:w-[100%] hover:border-2 hover:p-2 hover:border-red-700 object-contain "
              />
            </li>
            <li>
              <img
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/speaker-mobile-mod/r/6/4/1-mini-boost-4d-metal-bluetooth-wireless-speaker-colorful-small-original-imagvgj6cxny7cfm.jpeg?q=70&crop=false"
                alt=""
                srcset=""
                className="md:h-[100%] md:w-[100%] hover:border-2 hover:p-2 hover:border-red-700 object-contain "
              />
            </li>
            <li>
              <img
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/speaker-mobile-mod/h/f/b/1-mini-boost-4d-metal-bluetooth-wireless-speaker-colorful-small-original-imagvgj6xfnhh6u7.jpeg?q=70&crop=false"
                alt=""
                srcset=""
                className="md:h-[100%] md:w-[100%] hover:border-2 hover:p-2 hover:border-red-700 object-contain "
              />
            </li>
          </ul>
          <li className="md:w-[100%] md:h-[100%] md:p-5  md:overflow-hidden list-none h-70 w-[100%]">
            <img
              src="https://rukminim2.flixcart.com/image/128/128/xif0q/speaker/smart-speaker/5/p/a/m3-portable-bluetooth-mini-speaker-dynamic-metal-sound-with-high-original-imah5ghbz6tqn68z.jpeg?q=70&crop=false"
              alt=""
              srcset=""
              className="h-[100%] w-[100%]  object-contain "
            />
          </li>
        </div>
        <div className="md:w-[100%] md:h-[100%] md:border-1 md:border-black/50 shadow-2xl shadow-white "></div>
      </div>
    </>
  );
};

export default productPage;
