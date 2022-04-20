import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Typography } from "@mui/material"
import Quiz from '../src/components/quiz'
import data from "../src/data"

export default function Home() {
  return (
    <>
      <Container sx={{mt: 5, mb: 6}}>
        <Typography align="center" fontWeight="bold" variant="h1" fontSize='46px'>
          ガチで東京の人しか解けない！ #東京の難読地名クイズ
        </Typography>
        {data.map((datum) => {
          return <Quiz datum={datum} />
        })}
      </Container>
    </>
  )
}