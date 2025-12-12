import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "./index";
import { Box, Typography } from "@mui/material";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50vh",

        
        position: "relative",
        top: "120px",
      }}
      className="py-20 bg-white"
    >
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 text-center">
        <Box
          sx={{
            position: "relative",
            bottom: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              fontWeight: "700",
              mb: 1,
              letterSpacing: "0.5px",
              display: "block",
              borderBottom: "2px solid #157EFD",
              pb: "4px",
              mx: "auto",
              width: "150px",
            }}
            className="text-3xl mb-2 font-bold text-gray-900 tracking-wide"
          >
            FAQ
          </Typography>
          <p className="mt-4 text-gray-600 text-sm">
            Understanding Muhiris: Your Questions Answered
          </p>
        </Box>

        <div className="mt-12 w-full text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="py-6 w-full h-20 mb-6 border-b border-gray-200 last:mb-0 last:border-none"
            >
              <button
                className="w-full flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-900 font-semibold    text-[17px]">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-[#157EFD]" size={22} />
                ) : (
                  <ChevronDown className="text-[#157EFD]" size={22} />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-7 text-[15px]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
