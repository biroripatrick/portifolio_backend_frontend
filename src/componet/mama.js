import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 },
     { deviceWidth: 1600 } // `device` prop
  )

  return (
    <div>
      {isDesktopOrLaptop &&
        <p>
          this will always get rendered even if device is shorter than 1224px,
          that's because we overrode device settings with 'deviceWidth: 1600'.
        </p>
      }
    </div>
  )
}