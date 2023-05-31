import './App.css';
import Card from './Components/Card/Card';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className='home-content'>
        <Main />
      </div>
      <div className='cards'>
        <Card 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVoUYfVUxYH9PRkqEsorU0XmosVBE0NLctw&usqp=CAU"
          number="2000"
          title="enterprice organizations successfully launched"
         />
         <Card 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZb4nPft4_dOVCnWtBc-msUHkjItD2IgGcAA&usqp=CAU"
          number="45,000"
          title="enterprice organizations successfully launched"
         />
         <Card 
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACMjIyZmZn8/Pzv7+/s7Ozi4uKlpaX4+Pjy8vLr6+uhoaFVVVXKysqxsbG5ubmvr6+Tk5NISEh2dnZcXFzU1NQMDAxnZ2eIiIg0NDTl5eUTExNjY2Nzc3NAQEAgICApKSnGxsZQUFB/f38uLi46Ojrb29tFRUUZGRkiIiJ1aJQXAAAHL0lEQVR4nO2c6XbqOgxGMXMYw0zLPLQ97fs/4G0AkwRsS5bDyTp3ffs3USXHtsa0UgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwL9K4zhq16q19ujYKFuVF9BtL1WW5ahbtkqFEvfVM/24XrZeRdE+GOxL+GmXrVohDNYW+y4MylYvmGjqsu+XbVS2imG03gkDlfr4KlvJEI6kff/4Th2yDFRqWLaiUmKmgUrFZasqY842UKl52cpKaHoYqFSzbHUFnLwsPJWtrj89LwOV6pWmaaPVkmQCfns0QbJPhcqlz4+2i+tfX09HHb9nl25zDCz9/kBntL2Fg4vtSGbmYPOggY9jbnkbqFTLR7mHFdz4Rw1fhouiz4+vtgILt2zpLYNyJ8/g782sxJj5uP8pTOCexLH58TcP+zoTmxITXtLaFlk4Ysmu25Vj3xXNT7sWn6xDbUrpafoc0R2XcszKSOSQodSO8RYbIgOVYqxefecS8M5LNq274MqMlsBLmp450qKJ3THhGGg5xyl09EGKsEBfZGSkxLgLGZ6M3O3+7v4K6fS7tAzaq25oIaQidOnCzHsBym0oGaykjnKuQgOVIuR+cWRQqSZVGrtwLsnCM0fG1C2jzlJkT1zKL7Iw+mYJcbsz5j1PxLkvsnDAE+L2OZZ49BHiTn6RhVWekKpTiDNiSCEurBdZOOMJ2TmFLHhC9m5VDkIDD26xvGOoFi4ZvItGUYvNcFtGCtoarquGHTK7VWEemCfcJ4htoSuA73CFuFXhF7vzEKVvrhhXmljQLmWEj0aIgLcQ5ZzdzBTiSvCsBmuoqvCBJ2btFELkhhoq9q6JLKTSMmbK4s4RmZldjdBFUkxUalXMurnDEWZgRLaKmM45B1k8YDaziggpP8hyiE9nTUMuW3RgySGksBIUwm8l+N81jO4TK2qmyqasE0QdmAozWc3BqFmzlCPLGIwUmMgxrzCzlDusinUhyjEK8qyiZORXrOFVOiNaEKM1MKJkMMcK/PYps69CxoOszgDhWFl7lKVNBvYwBrFPmU1IZ12ZUfLW8BvdHi1up6dldT5+iRxSZj4Tk9zaN7dpl1B3KNfnz8hZG5z8LuYFXpfNcwazGOUs14337BKndsfox+SxHHBe+/FOw3Ckp57TCgkrKrg5McKHRzom5fxnOVpvucrPuuozSZDBvVOFU8Kr6j4rZXGWKVef1/qX4ttiVgsYPGvYY91zwDTMXbl+bV76wHhn/GMw72f8f/oooT4454vNu/OgrIVvUUe2OxXu+eagVz0vZ8tztTdoysxbTYliVYNULkqcjXNkN7k4zuVMn0dn6mpKhpLdScrN03xaCwGD25wGx4cd/4y5b2o4YXxdcvOt75RyB/trjNJoYRIbfF9n+Ce9BSl94uTcfbKu4FYSiL1T0UR6I/8ZGpSL4rROaBPVyWV0623eyEa8zBVTT86d+qX/3IZ06JFWfeJajvyY1noZ5+7hRrzNKWeO5E0lgs24PYzjYXtsCHfX9rs+ynrAmfM9rrI/nVq3atNQqp5p5QyNIFO507+w8m17PYN9/oe7nuWX3dHDyh0sq7FiNtZSnt+ipNXwYY5TTYXbyfn4YGX3NyYx/NB4VXYE4yuPZ7HuvUgJpm6rPX/bn6a9322VbKxz3xTkXDClQMzOdJ6HuoikRq1MFY3Oh0xSyunpMErGcdVDwcx3sP7O415oHaSSUk4Pm1/ajczWbGSNlIR1XpvVnn6EJt886jA7fs9kll828Hoht0+botP8TK7AL9yjvyzuyy8dB72QOdD1Q4igLJl18/diBjHOmWCKTHVReF2ZGBUj9BahMnuGNu66SCcwjNy3RpCUWRFLf3fRQXv9iR8tVjb2r7ks1CpIxLv2XuxBFSY6zatLx3EvTMMX6X4jSyefreh9KnWHFy7eLMBVZOaWAw+zgXsPIuglDlktOQf6FdaDgzW7bO730kY2spmCFL3OZNNRwD2uD5IShR1D3TSSpSYUuhgk/Xzjwpw3fGFDp/lht5WNz5t02ZdwN3rCEbQr93iGOXjriy6ahXjsaSXkitCF1WKdfYou6IWc8h13GtGILkAHORwH3/XwbboP2WDaY0nHSWkG4dt0EXIV1wrYRG50+iOb5rwSYuE8fIUJdNQb4rQDLFzfSj2NF92kCbcSJPN7ICMBFuqYo/iQNEVnwqJ64pUAC3V+ExRyEGh/4TsHmCHAQu0NC8+bMuiaVEAKFWChvspDPCpJ+EkIsPAWlIalXxS3gqD0+3cVZOFteUPKfTTaI8klhFv4qqD0Slyihd8vj2gSdClP7hArVSm6B/ma3FCjLeyJ9awEI+5bsSjv30elhETFNNT3R38DWAgLYWH5wEJYCAvLBxbCQlhYPrAQFsLC8nllydvv89JXcXwTl1Bo3rw/vwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIv5D26ybxhXAavrAAAAAElFTkSuQmCC"
          number="200,000+"
          title="enterprice organizations successfully launched"
         />
      </div>
    </div>
  );
}

export default App;
