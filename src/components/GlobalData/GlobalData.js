import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGlobalData } from '../../store/features/globalData'
import DoughnutChart from '../DoughnutChart/DoughnutChart'
import Layout from '../Layout/Layout'

const GlobalData = () => {
    const global = useSelector(state => state.global)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGlobalData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout active={1}>

            <div style={{width:400,margin:'auto'}}>
           {global && <DoughnutChart data={[global.deaths,global.recovered,global.active]}/>}</div>
        </Layout>
    )
}

export default GlobalData
