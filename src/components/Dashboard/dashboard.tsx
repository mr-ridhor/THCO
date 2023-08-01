import Sidebar from "../MainPage/Main";
import { data } from "../../utils/helpers/MockItems";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import Chart from "react-apexcharts";
import Pie from "./Pie";
import { BiCart } from "react-icons/bi";


interface ChartData {
  options: {
    chart: {
      type: string;
      height: number;
      width:number,
      toolbar?: { show: boolean }
    };
    plotOptions: {
      bar: {
        borderRadius: number;
        horizontal: boolean;
      columnWidth:number,
      endingShape:string

      };
    };
    dataLabels: {
      enabled: false;
    };
    xaxis: {
      categories: string[];
    };
    
  };
  
  // series: {
  //   data: any[];
  // }[];
}




const dashboard:React.FC = () => {
  const series = [25, 50, 25];
  const options: ChartData = {
    legend: {
      position: "top",
      color: "#A6A8B1",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
   {
    data:[ 25, 50, 25]
   }
    ],
    labels: ["Acquisition", "Purchase", "Retention"],
    fill: ["#5570F1", "#97A5EB", "#FFCC91"],
    plotOptions: {
      pie: {
        expandedOnClick: false,
        donut: {
          size: "90%",
          labels: {
            show: false,
            // position:'top',
            total: {
              show: false,
              fontSize: "74px",
              color: "yellow",
            },
          },
        },
      },
    },
  };
  const serie = [
    {
       //will be displayed on the y-axis
      data:["20k", "40k", "60k", "80k", "100k","100k","100k"]
    }
  ];
  const data: ChartData = {
 
    options: {
      chart: {
        type: "bar",
        height: 400,
        width:10,
        toolbar: {
          show: false, // Set to false to hide the toolbar
        },
        
      },
      
      plotOptions: {
        bar: {
          borderRadius: 1,
          horizontal: false,
          columnWidth:5,
          endingShape: 'rounded'
        },
        
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Sept 10",
          "Sept 11",
          "Sept 12",
          "Sept 13",
          "Sept 14",
          "Sept 15",
          "Sept 16",
        ],
      },
      
    },
  };
  return (
    <div className="">
      <Sidebar>
        <div className="h-full">
          <div className=" overflow-hidden px-2 lg:px-5 pt-6 h-30 xl:h-28">
            <div className="grid grid-cols-1 md:grid-cols-7  gap-1 xl:gap-6 h-full">
              <div className="bg-[#FFF] col-span-2 rounded-lg w-full flex flex-col h-full justify-between py-2 px-2">
                <div className="flex justify-between items-center">
                  <div className="bg-[#d0d5eb] p-1 rounded-[5px] opacity">
                    <AiOutlinePieChart className="h-4 w-4 text-[#5570F1]" />
                  </div>
                  <div className="text-[#BEC0CA] flex text-xs font-semibold items-center gap-1">
                    <span>This week</span>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className="">
                  <div className="w-full lg:w-[80%] flex justify-between items-center">
                    <div className="flex flex-col gap-1 ">
                      <span className="text-[12px] text-[#8B8D97]">Sales</span>
                      <span className="font-semibold text-[10px] lg:text-lg flex items-center gap-3 lg:gap-1 ">
                        ₦4,000,000.00
                        {/* <small className="text-[#519C66] md:text-[12px] text-[8px]">+15.80%</small> */}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-[#8B8D97] ">
                        Volume
                      </span>
                      <span className="font-semibold text-[10px] lg:text-lg flex items-center gap-1 ">
                        450
                        <small className="text-[#519C66] lg:text-[12px] text-[8px]">
                          +20.00%
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF] col-span-2 rounded-lg w-full flex flex-col h-full justify-between py-2 px-2">
                <div className="flex justify-between items-center">
                  <div className="bg-[#FFCC9129] p-1 rounded-[5px]">
                    <BsBag className="h-4 w-4 " />
                  </div>
                  <div className="text-[#BEC0CA] flex text-xs font-semibold items-center gap-1">
                    <span>This week</span>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className="">
                  <div className="w-full lg:w-[80%] flex justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-[#8B8D97]">
                        Customers
                      </span>
                      <span className="font-semibold text-[10px] lg:text-lg flex items-center gap-1">
                        1,250
                        <small className="text-[#519C66] lg:text-[12px] text-[8px]">
                          +15.80%
                        </small>
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-[#8B8D97]">Active</span>
                      <span className="font-semibold text-[10px] lg:text-lg flex items-center gap-1">
                        1,180
                        <small className="text-[#519C66] lg:text-[12px] text-[8px]">
                          85%
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF] col-span-2 md:col-span-3 rounded-lg w-full flex flex-col h-full justify-between py-2 px-2">
                <div className="flex justify-between items-center">
                  <div className="bg-[#FFCC9129] p-1 rounded-[5px]">
                    <BsBag className="h-4 w-4 " />
                  </div>
                  <div className="text-[#BEC0CA] flex text-xs font-semibold items-center gap-1">
                    <span>This week</span>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className=" h- flex flex-col w-full mt-2">
                  <div className="w-full xl:w-96 flex justify-between items-center">
                    <div className="flex flex-col ">
                      <span className="text-[12px] text-[#8B8D97]">
                        All Orders
                      </span>
                      <span className="font-semibold text-sm lg:text-lg">
                        450
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-[12px] text-[#8B8D97]">
                        Pending
                      </span>
                      <span className="font-semibold text-sm lg:text-lg">
                        5
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-[12px] text-[#8B8D97]">
                        Completed
                      </span>
                      <span className="font-semibold text-sm lg:text-lg">
                        455
                      </span>
                    </div>
                  </div>
                  {/* <div className="">2</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 lg:px-5 mt-3 h-[calc(100%-130px)] xl:h-[calc(100%-125px)] pb-3 ">
            <div className="grid grid-cols-1 md:grid-cols-7  gap-1 xl:gap-6 h-full ">
              <div className="rounded-lg col-span-2 md:col-span-4 h-full grid grid-rows-2 gap-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div className="bg-[#FFF] row-span-1 px-2">
                    <div className="w-full rounded-lg flex justify-between items-center">
                      <span className="text-[#45464E] text-[12px] pt-2 font-semibold">
                        Marketing
                      </span>
                      <div className="text-[#BEC0CA] flex text-xs font-semibold items-center gap-1">
                        <span>This week</span>
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                    <Chart
                      options={options}
                      series={series}
                      type="donut"
                      width="100%"
                      height={160}
                    />
                  </div>
                  <div className=" flex flex-col h-full justify-between gap-y-3">
                    {/* <Pie data={data} labels={labels}/> */}
                    <div className="px-2 py-1 bg-[#5570F1] h-full flex flex-col rounded-lg justify-between">
                      <div className="">
                        <span className=" ">
                          <HiOutlineFolderMinus
                            className="h-5 w-5 text-[#FFF] rounded-md px-1 py-1 
                        bg-[#a8b2e7]  "
                          />
                        </span>
                      </div>
                      <div className="">
                        <div className="w-full xl:w-52 flex justify-between items-center">
                          <div className="flex flex-col ">
                            <span className="text-[12px] text-[#FFF]">
                              All Products
                            </span>
                            <span className="font-medium text-[12px] text-[#FFF]">
                              32
                            </span>
                          </div>
                          <div className="flex flex-col ">
                            <span className="text-[12px] text-[#FFF] ">
                              Active
                            </span>
                            <span className="font-medium text-[12px] text-[#FFF] gap-2 flex items-center ">
                              32 <small className="text-[8px]">+24%</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-[#FFF] h-full flex flex-col rounded-lg justify-between">
                      <div className="flex items-center justify-between">
                        <span className=" ">
                          <BiCart
                            className="h-6 w-6  rounded-md px-1 py-1 
                        bg-[#FFCC9129]  "
                          />
                        </span>
                        <div className="text-[#BEC0CA] flex text-xs font-semibold items-center gap-1">
                          <span>This week</span>
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                      <div className="">
                        <div className="w-full xl:w-52 flex justify-between items-center">
                          <div className="flex flex-col ">
                            <span className="text-[12px] text-[#CC5F5F]">
                              Abandoned Cart
                            </span>
                            <span className="font-medium text-[12px] text-[#FF] gap-1 flex">
                              20%
                              <small className="text-[#519C66] lg:text-[12px] text-[8px]">
                                +0.00%
                              </small>
                            </span>
                          </div>
                          <div className="flex flex-col ">
                            <span className="text-[12px] text-[#BEC0CA] ">
                              Customers
                            </span>
                            <span className="font-medium text-[12px]  gap-2 flex items-center ">
                              30
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-[#FFF]">
                  <Chart
                    options={data.options}
                    series={serie}
                    type="bar"
                    height={150}
                    width={400}
                  />
                </div>
              </div>

              <div className=" md:col-span-3 col-span-2 bg-[#FFF] rounded-lg ">
                2
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default dashboard;
