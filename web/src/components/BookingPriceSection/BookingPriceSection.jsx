import {Link,routes} from '@redwoodjs/router'
import Particles from '../Particles/Particles'
const BookingPriceSection = () => {
  return (
    <section className="relative" >
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 ">
          <div className="absolute inset-0 translate-z-0 bg-purple rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      <Particles />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" >
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 " data-aos="fade-down"
                data-aos-delay="100">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Booking Pricing Plans</div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Flexible Party Plans</h2>
            <p className="text-lg text-slate-400">Upstairs at the Barracks all-inclusive private parties</p>
            <p className="text-lg text-slate-400">Please note that a personalised party package can be created</p>
          </div>
          {/* Pricing tabs */}
          <div className="relative" >
            {/* Blurred shape */}
            <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true" >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
              </svg>
            </div>
            {/* Content */}
            <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
              {/* Pricing toggle */}
              <div className="px-6 flex flex-col justify-end">
                <div className="pb-5 md:border-b border-slate-800">
                  {/* Toggle switch */}
                  <div className="max-md:text-center">
                    <div className="inline-flex items-center whitespace-nowrap">
                    </div>
                  </div>
                </div>
              </div>
              {/* Pro price */}
              <div className="px-6 flex flex-col justify-end">
                <div className="grow pb-4 mb-4 border-b border-slate-800">
                  <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">100 People</div>
                  <div className="mb-1">
                    <span className="text-lg font-medium text-slate-500">€</span><span className="text-3xl font-bold text-slate-50">{'600'}</span><span className="text-sm text-slate-600 font-medium"></span>
                  </div>
                  <div className="text-slate-500">Small Party</div>
                </div>
                <div className="pb-4 border-b border-slate-800">
                  <Link className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" to={routes.contactus()}>
                    Book Now <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
              </div>
              {/* Team price */}
              <div className="px-6 flex flex-col justify-end">
                <div className="grow pb-4 mb-4 border-b border-slate-800">
                  <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">200 People</div>
                  <div className="mb-1">
                    <span className="text-lg font-medium text-slate-500">€</span><span className="text-3xl font-bold text-slate-50">{'900'}</span><span className="text-sm text-slate-600 font-medium"></span>
                  </div>
                  <div className="text-slate-500">Medium Party</div>
                </div>
                <div className="pb-4 border-b border-slate-800">
                  <Link className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group" to={routes.contactus()}>
                    Book Now <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
              </div>
              {/* Enterprise price */}
              <div className="px-6 flex flex-col justify-end">
                <div className="grow pb-4 mb-4 border-b border-slate-800">
                  <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">250 People </div>
                  <div className="mb-1">
                    <span className="text-lg font-medium text-slate-500">€</span><span className="text-3xl font-bold text-slate-50">{'1000'}</span><span className="text-sm text-slate-600 font-medium"></span>
                  </div>
                  <div className="text-slate-500">Max Capacity Party</div>
                </div>
                <div className="pb-4 border-b border-slate-800">
                  <Link className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" to={routes.contactus()}>
                    Book Now <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
              </div>
              {/* # Usage */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4">Package Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Package Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Package Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Package Features</div>
              </div>
              {/* Social Connections */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Two Menu Buffet</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Two Menu Buffet</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Two Menu Buffet</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Two Menu Buffet</span></span>
                </div>
              </div>
              {/* Custom Domains */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Live Personal DJ</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Live Personal DJ</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Live Personal DJ</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Live Personal DJ</span></span>
                </div>
              </div>
              {/* User Role Management */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Party Security</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Party Security</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Party Security</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Party Security</span></span>
                </div>
              </div>
              {/* External Databases */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Bar Extension</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Bar Extension</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Bar Extension</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span> <span className="md:hidden">Bar Extension</span></span>
                </div>
              </div>
              {/* # Features */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4">Extra Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Extra Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Extra Features</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Extra Features</div>
              </div>
              {/* Custom Connection */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Custom Cocktail Menu</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Custom Cocktail Menu</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Custom Cocktail Menu</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Custom Cocktail Menu</span></span>
                </div>
              </div>
              {/* Advanced Deployment Options */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Private Entrance</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Entrance</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Entrance</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Entrance</span></span>
                </div>
              </div>
              {/* Extra Add-ons */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Private Smoking Area</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Smoking Area</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Smoking Area</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Private Smoking Area</span></span>
                </div>
              </div>

              {/* Enterprise Add-ons */}

              {/* # Support */}

              {/* Premium Support */}
              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Premium Support</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
                <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Premium Support</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Premium Support</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Premium Support</span></span>
                </div>
              </div>
              {/* next*/}

              <div className="px-6 flex flex-col justify-end">
                <div className="py-2 text-slate-400 border-b border-slate-800">Tailor Made Cocktail</div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
                <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Tailor Made Cocktail</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Tailor Made Cocktail</span></span>
                </div>
              </div>
              <div className="px-6 flex flex-col justify-end">
                <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
                  <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span><span className="md:hidden">Tailor Made Cocktail</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingPriceSection
