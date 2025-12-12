import { useContext, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "./index";
import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { LanguageContext } from "../../context/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;
  const isRTL = language === "ar"; 

  return (
    <Box
      key={language}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 4 },
        position: "relative",
        top: { xs: "60px", sm: "80px", md: "100px" },
        direction: isRTL ? "rtl" : "ltr",
      }}
      className="bg-white"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Title */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "26px" },
              fontWeight: "700",
              letterSpacing: "0.5px",
              borderBottom: "2px solid #157EFD",
              pb: "6px",
              mx: "auto",
              width: { xs: "120px", sm: "140px", md: "150px" },
            }}
            className="text-gray-900"
          >
            {t("FAQ")}
          </Typography>

          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            {t("Understanding Muhiris: Your Questions Answered")}
          </p>
        </Box>

        {/* FAQ Items */}
        <div className="mt-6 w-full">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="py-5 h-20 w-full mb-4 border-b border-gray-200 last:mb-0"
              style={{ textAlign: isRTL ? "right" : "left" }}
            >
              <button
                className={`w-full flex items-center justify-between`}
                onClick={() => toggleFAQ(index)}
              >
                <Typography
                  className={`font-semibold text-[16px] sm:text-[17px]`}
                  sx={{ flex: 1 }}
                >
                  {t(item.question)}
                </Typography>

                {openIndex === index ? (
                  <ChevronUp className="text-[#157EFD]" size={22} />
                ) : (
                  <ChevronDown className="text-[#157EFD]" size={22} />
                )}
              </button>

              {openIndex === index && (
                <p
                  className="mt-3 text-gray-600 leading-7 text-[14px] sm:text-[15px]"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {t(item.answer)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
