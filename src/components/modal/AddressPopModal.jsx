
import {  Slide, Box,  IconButton, ClickAwayListener } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import Images from "../../constant/Images.js";

const AddressPopModal = ({ open, setOpen }) => {

  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleClickAway = () => {
      if (open) {
        handleClose();
      }
    };
  
  return (
  
    <div>
 
    {open && (
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <Box
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'background.paper',
                p: 2,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                boxShadow: 3,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='text-[#D14224]'>
                <IconButton onClick={handleClose} className='text-[#D14224]'>
                  <CloseIcon />
                </IconButton>
              </Box>
              
              <form className="flex flex-col  gap-y-2" noValidate>
              <label
                className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
                htmlFor="Region"
              >
                المنطقة
              </label>
              <div className=" 2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
                <div className="absolute top-5 left-5">
                  <img
                    src={Images.arrowDown}
                    alt="arrowDown"
                    className="w-3 h-2"
                  />
                </div>
                <select
                  name="Region"
                  id="Region"
                  className="w-full text-right outline-none text-[12px] text-input-placeholder"
                >
                  <option value="اختر المنطقة ">اختر المنطقة </option>
                </select>
              </div>

              <label
                className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
                htmlFor="city"
              >
                المدينة
              </label>
              <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
                <div className="absolute top-5 left-5">
                  <img
                    src={Images.arrowDown}
                    alt="arrowDown"
                    className="w-3 h-2"
                  />
                </div>
                <select
                  name="city"
                  id="city"
                  className="w-full text-right outline-none text-[12px] text-input-placeholder"
                >
                  <option value="اختر المدينة "> اختر المدينة</option>
                </select>
              </div>

              <label
                className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
                htmlFor="address"
              >
                العنوان بالتفصيل
              </label>
              <div className="2xl:p-4  border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
                <textarea
                  name="address"
                  id="address"
                  rows={1}
                  placeholder="عنوانك"
                  className="resize-none row-10 w-full text-right outline-none text-[12px] text-input-placeholder"
                ></textarea>
              </div>

              <input type="submit" value="اضافة " className="btnSubmitPopUp" />
            </form>
             
            </Box>
          </Slide>
        </div>
      </ClickAwayListener>
    )}
  </div>
  );
};

export default AddressPopModal;
