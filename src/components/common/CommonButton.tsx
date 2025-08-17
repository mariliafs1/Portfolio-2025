import React from 'react'
import Button from '@mui/material/Button'

type CommonButtonProps = {
  color: "rainbow"|"black"; // só aceita chaves válidas do colors
  text: string;
};

export default function CommonButton({color, text}: CommonButtonProps) {
  const colors ={
    rainbow: "bg-[linear-gradient(135deg,#FFB147,#FF6C63,#B86ADF)] text-white",
    black: "bg-black text-white",
  }
  return (
<Button className= {`${colors[color]} hover:opacity-80 shadow hover:shadow-lg`}>{text}</Button>
  )
}
