import { Box, Container, Tabs, Tab, Typography } from "@mui/material";
import PersonalRounded from '../assets/PersonRounded.png';

export const ProfilePage = () => {
  return (
    <Container maxWidth="xl" sx={{
      width: 1500,
      height: 1138,
      pl: 5,
      pr:5,
      backgroundColor: "#F5F5F5",
    }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: "left", mt: 3.75, mb: 2.5 }}>Мой профиль:</Typography>
      <Box sx={{display: 'flex'}}>
        <Box sx={{width:320, height:436, backgroundColor: "#FFFFFF" }}>
          <Box component="img" sx={{width:320, height:240}} src={PersonalRounded} alt="Фото профиля"  />
          <Box sx={{width:320, height:196}}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: "left", ml: 2.5, mt: 2.5, mb: 0 }}>Ангелина Фомина</Typography>
            <Typography variant="body2" sx={{  textAlign: "left", ml: 2.5, mt: 1.25, mb: 3.75}}>Статус: начинающий</Typography>             
            <Box component="button" sx={{width:280, height:42, m: 2.5, fontSize: 24}}>Выйти из аккаунта</Box>  
          </Box>
        </Box>
        <Box sx={{width:1080, height:982, ml: 2.5, pl: 4, pt: 1.25, textAlign: "left", backgroundColor: "#FFFFFF" }}>

          <Tabs value={0} indicatorColor="primary" textColor="primary" sx={{ width: 388, borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Личные данные" />
            <Tab label="Контакты" />
            <Tab label="Избранное" />
          </Tabs>

          <Box sx={{ mt: 3.75, width:550, height: 860 }}>
            <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'old', mb: 1 }}>Профиль</Typography>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Фамилия:</Typography>
                <Typography variant="body2">Фомина</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Имя:</Typography>
                <Typography variant="body2">Ангелина</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}>Дата рождения</Typography>
              <Typography variant="body2" sx={{ width: '150px', color: 'text.secondary' }}>13.02.1994</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}>Локация для помощи</Typography>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Область:</Typography>
                <Typography variant="body2">Владимирская</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Населённый пункт:</Typography>
                <Typography variant="body2">Владимир</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Область:</Typography>
                <Typography variant="body2">Нижегородская</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>Населённый пункт:</Typography>
                <Typography variant="body2">Нижний Новгород</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>Образование</Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">МОУ СОШ №7</Typography>
                <Typography variant="body2" color="text.secondary">Уровень образования: Средний общий</Typography>
                <Typography variant="body2" color="text.secondary">Год окончания: 2010</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">Московский государственный университет имени М.В. Ломоносова</Typography>
                <Typography variant="body2" color="text.secondary">Уровень образования: Высший</Typography>
                <Typography variant="body2" color="text.secondary">Направление: Информатика и вычислительная техника</Typography>
                <Typography variant="body2" color="text.secondary">Год окончания: 2023</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>Обо мне</Typography>
              <Typography variant="body1">
              Я волонтер, который работает с пенсионерами, и это приносит мне огромную радость. 
              Каждый день я общаюсь с удивительными людьми, которые делятся своим жизненным опытом и 
              мудростью. Мы вместе проводим время, играем в настольные игры, читаем книги и просто 
              беседуем. Я вижу, как важно для них чувствовать внимание и заботу, и это вдохновляет 
              меня работать еще усерднее. Каждый улыбка и благодарность от них наполняют мое сердце 
              теплом. Волонтерство с пенсионерами стало для меня не только делом, но и настоящей дружбой.
              </Typography>
            </Box>

      </Box>
        </Box>
      </Box>
    </Container>
  );
};
