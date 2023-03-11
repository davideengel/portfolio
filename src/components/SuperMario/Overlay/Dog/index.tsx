import { FC } from 'react'
import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = {
  xPos: number
  xMin: number
  xMax: number
  offset: number
}

const Dog: FC<Props> = ({ xPos, xMin, xMax, offset }: Props) => {
  return (
    <Box
      as={motion.div}
      zIndex={999}
      position={'fixed'}
      top={40}
      left={8}
      ml={(offset - xPos > 0 ? offset - xPos + (offset % xPos) / 2 : 0) + 'px'}
      visibility={xPos < 2000 ? 'hidden' : 'visible'}
      {...((xPos > xMin &&
        xPos < xMax && {
          initial: { opacity: 0, marginTop: -600 },
          animate: { opacity: 1, marginTop: 0, transition: { duration: 0.6 } },
        }) || {
        initial: { opacity: 1, marginTop: 0 },
        animate: { opacity: 1, marginTop: -600 },
      })}>
      <Box
        as={motion.div}
        w={{ base: 225, md: 275 }}
        h={{ base: 225, md: 275 }}
        border={4}
        borderStyle={'solid'}
        borderColor={'black'}
        rounded={'lg'}
        boxShadow={'2px 2px rgba(0,0,0,.2)'}
        overflow={'hidden'}
        initial={{ scale: 1 }}
        whileInView={{
          scale: [1, 1.05, 1],
          transition: {
            type: 'keyframes',
            times: [0, 0.5, 1],
            delay: 0,
            duration: 1.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        }}>
        <NextImage alt={'dog'} src={'/images/dog/dog.png'} width={300} height={300} priority />
      </Box>
    </Box>
  )
}

export default Dog
