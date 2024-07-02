import { useState } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VendorProfileReviewModal = ({ open, handleClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (index) => {
    setRating(index + 1);
  };

  const handleCloses = () => {
    handleClose(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleCloses}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton onClick={handleCloses}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="center" my={2}>
          {[...Array(5)].map((_, index) => (
            <IconButton
              key={index}
              onClick={() => handleRatingChange(index)}
              color="primary"
            >
              {index < rating ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          ))}
        </Box>

        <textarea
          name=""
          id=""
          rows={4}
          className="rounded-2xl outline-none border w-[100%]  border-[#A7A7A7] resize-none text-right p-3"
          placeholder="اكتب تعليقك"
        ></textarea>

        <Box display="flex" justifyContent="center" mt={3}>
          <button className="btnSubmitPopUp2">تأكيد</button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VendorProfileReviewModal;
