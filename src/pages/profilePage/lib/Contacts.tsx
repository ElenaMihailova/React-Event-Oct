import { Box, Typography } from "@mui/material"
import vk from '../../../assets/vk.svg';
import telegram from '../../../assets/telegram.svg';
import whatsapp from '../../../assets/whatsapp.svg';

export const Contacts = () => {
    return (
        <Box sx={{ w: 260, h: 334, p:3 }}>
            <Box sx={{ mb: 3.75 }}>
                <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold', mb: 1 }}>E-mail</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>forexample12@gmail.com</Typography>
            </Box>
            <Box sx={{ mb: 3.75 }}>
                <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold', mb: 1 }}>Телефон</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>+7 999 555 66 11</Typography>
            </Box>
            <Box sx={{ mb: 1,  }}>
                <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold', mb: 1 }}>Социальные сети</Typography>
                <Box sx={{ w:260, h:150}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', w: 260, h: 28}}>
                        <Box component="img" sx={{width:24, height:24, mr: 2}} src={vk} alt="vk icon"  />
                        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Vkontakte</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', w: 260, h: 28}}>
                        <Box component="img" sx={{width:24, height:32, mr: 2}} src={telegram} alt="telegram icon"  />
                        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Telegram</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' , textAlign: 'center', w: 260, h: 28}}>
                        <Box component="img" sx={{width:24, height:32, mr: 2}} src={whatsapp} alt="whatsapp icon"  />
                        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>WhatsApp</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}