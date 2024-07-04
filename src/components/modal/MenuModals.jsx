import { Slide, Box, IconButton, ClickAwayListener } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {  useEffect } from "react";
import { useLocation } from "react-router-dom";

const MenuModals = ({ openModal, setOpenModal }) => {
  const location = useLocation();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickAway = () => {
    if (open) {
      handleClose();
    }
  };

  useEffect(() => {
    // Close the menu when the location changes
    handleClose();
  }, [location]);

  return (
    <div className="">
      {openModal && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "background.paper",
                  p: 2,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="text-[#D14224]"
                >
                  <IconButton onClick={handleClose} className="text-[#D14224]">
                    <CloseIcon />
                  </IconButton>
                </Box>

                <div className="modalContainer">
                  <div className="w-full bg-[#F6D9D3] rounded-lg p-2 my-2 text-right text-[#D24325] font-bold">
                    قائمة طعام
                  </div>

                  <div className="menus gap-y-1">
                    {/* add category */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/category"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]"> فئة </div>
                      </Link>
                    </div>

                    {/* add product */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/add_product"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">
                          {" "}
                          أضف منتج{" "}
                        </div>
                      </Link>
                    </div>
                    {/* contact us */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/contact_us"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">
                          {" "}
                          اتصل بنا{" "}
                        </div>
                      </Link>
                    </div>
                    {/* orders */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/orders"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">طلبات</div>
                      </Link>
                    </div>
                    {/* my product */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/my_product"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">
                          المنتج الخاص بي
                        </div>
                      </Link>
                    </div>

                    {/* favorite */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/favorite"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">مفضل</div>
                      </Link>
                    </div>

                    {/* profile */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/profile"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">
                          حساب تعريفي
                        </div>
                      </Link>
                    </div>
                    {/* wallet */}
                    <div className=" w-full cursor-pointer border-b border-[#DADADA]  ">
                      <Link
                        to="/dashboard/wallet"
                        className=" flex justify-end w-full py-2 hover:bg-lightGrey-100 pr-2"
                      >
                        <div className="font-medium text-[#545454]">محفظة</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Box>
            </Slide>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default MenuModals;
