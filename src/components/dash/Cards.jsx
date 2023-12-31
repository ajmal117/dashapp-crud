import React, { useEffect, useState } from "react";
import axios from "axios";
import bg from "../../icons/bg.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Cards() {
  const [data, setData] = useState([]);
  const [proName, setProName] = useState([{ name: "" }]);
  const [count, setCount] = useState(1);

  const getData = () => {
    axios
      .get(`https://picsum.photos/v2/list?page=1&limit=${count}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProName({ ...proName, [name]: value });
  };

  const handleAdd = (close) => {
    // arr[count - 1] = proName;
    if (count < 6) {
      setCount(count + 1);
    } else if (count > 6) {
      setCount(6);
    }
    getData();
    close();
  };

  const handleDelete = (id) => {
    //  data.filter((item) => {
    //   return item.id === id;
    // });
    setCount(count - 1);
    getData();
    console.log(id);
    // setData(ndata)
  };

  useEffect(() => {}, []);

  console.log(proName);
  console.log(data);

  return (
    <>
      <div className="pt-8 px-4">
        <h1 className=" font-semibold text-4xl">MY Project</h1>
      </div>
      <div className="">
        <div className="flex flex-wrap p-4 gap-2">
          {data.map((item, i) => {
            return (
              <>
                <div className=" flex flex-col gap-2 bg-white p-4 rounded-md">
                  <div className="flex justify-between">
                    {" "}
                    <button className="border border-green-400 p-1 rounded-md bg-red-200">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="border bg-red-400 p-1 rounded-md "
                    >
                      X
                    </button>
                  </div>
                  <img
                    src={item.download_url}
                    alt=""
                    className="h-60 rounded-md"
                  />

                  <div className="flex gap-2">
                    <label htmlFor="" className="font-semibold">
                      Project Number :
                    </label>
                    <p>{i + 1}</p>
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-semibold">
                      Project Name :
                    </label>
                    <p>{proName.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="" className="font-semibold">
                      Author Name :
                    </label>
                    <p>{item.author}</p>
                  </div>
                </div>
              </>
            );
          })}

          <div className="">
            <div className="flex flex-col gap-2 bg-white p-4 rounded-md">
              <div className="">
                <Popup
                  trigger={
                    <button className=" bottom-1 border-slate-300 ">
                      <img src={bg} alt="" className="" />
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal  p-2">
                      <div className="content flex flex-col gap-x-3 ">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="">Enter project Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            id=""
                            placeholder="Enter name"
                            className="outline-none border-2 border-slate-400 rounded-md"
                          />
                        </div>
                      </div>
                      <div className=" flex justify-between mt-2">
                        <button
                          onClick={() => handleAdd(close)}
                          className="border border-slate-500 p-1 rounded-md bg-green-300 text-slate-800"
                        >
                          Add project
                        </button>
                        <button
                          onClick={() => close}
                          className="border-2 border-slate-700 p-1 rounded-md text-white bg-red-400"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>

              <button className="font-semibold text-base ">
                Create a new project
              </button>
              <p className="font-semibold text-xs text-center">
                or try a <span className="text-[#FA782F]">sample project</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
