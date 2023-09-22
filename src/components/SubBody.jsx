import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ButtonShare from './Button'
import image1 from "../asset/noon.jpg"
import image2 from "../asset/amazon.png"
import BasicTable from './BasicTable'
import PopupDiscount from './PopupDiscount'

function SubBody() {
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);}
  return (
    <><Box sx={{marginTop:"5%"}}>
    <Typography component={"h2"}sx={{fontSize:"2rem",fontWeight:"600"}}>قلاية هوائية من فيليبس بحجم 4.1 لتر</Typography>
    <Typography component={"p"} sx={{marginY:"50px"}}>مزود بمقبص تحكم وشاشة تعمل باللمس لمجموعة متنوعة من الأشخاص مع 10 برامج من خيارات طهي محددة مسبقًا مما يوفر لك المزيد من الخيارات لبدأ طهي لمكونات مختلفة
مقلاة + طبق مقرمش (سلة غير لاصقة بقفل أمان) مع إيقاف تلقائي 
تنبيه جاهز ومؤقت مدمج
مفتاح واحد للتحكم في درجة الحرارة ووقت طهي المكونات بدقة
دوران هواء عالي السرعة 360 درجة
تقنية الحمل الحراري السريع: تم تجهيز المقلاة الهوائية بحماية من الحرارة الزائدة
</Typography>
    <Stack display={"flex"} flexDirection={"row"} justifyContent={"space-around"}>
    <ButtonShare text={"298 ريال"} image={image1} onClick={handleClickOpen}/>
    <ButtonShare text={"298 ريال"} image={image2} onClick={handleClickOpen}/>
    
    </Stack>
    <BasicTable/>
    <PopupDiscount open={open}handleClose={handleClose}/>
    </Box>
    </>
  )
}

export default SubBody