export default {
  global: {
    html: {
      fontSize: '62.5%'
    },
    body: {
      bg: '#fff',
      color: '#000',
      fontSize: '1.4rem',
      fontFamily: 'Montserrat, sans-serif'
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Recoleta'
    },
    a: {
      _hover: {
        textDecoration: 'none'
      }
    },
    '@keyframes blinker': {
      from: { opacity: '1.0' },
      to: { opacity: '0.0' }
    },
    '.chakra-switch__track': {
      _focus: {
        boxShadow: 'none !important'
      }
    },
    '.toastContainer': {
      zIndex: '1550 !important'
    },
    '.toast.success': {
      backgroundColor: 'rgba(40,51,65,1) !important'
    }
  }
}
