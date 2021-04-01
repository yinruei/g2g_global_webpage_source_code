<template>
    <ul class="subheading">
        <li> 
            <span align=left> The site displays verification statistics for global NWP model forecasts. 
                     Verifications are computed on 2.5x2.5/1.5x1.5-deg grids.
            </span>
        </li>
        <br>
        <p align=left>  Climatology data : 
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=blue>A.</font> 30-year (1959-1988) climatology of the NCEP/NCAR reanalysis is used for computing anomaly correlations. (1.0x1.0 deg) (link with /data-nas/share/climate/)
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=blue>B.</font> 20-year (1996-2015) climatology of the ECMWF-interim analysis is used for computing anomaly correlations.(1.0x1.0 deg) (change link with /data-nas/share/climate-ecinterm/) 
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=blue>C.</font> 20-year (1996-2015) climatology of the NCEP/GDAS analysis is used for computing anomaly correlations.(1.5x1.5) <font size=4 color=red> (coming soon....) </font> 
    </p>
   <li> <p align=left>  Model Acronyms:  
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=red><b>CWB :</b></font> Central Weather Bureau Global Model Forecast
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=red><b>NCEP:</b></font> The U.S. NCEP Global Forecast Systems 
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=red><b>ECM :</b></font> European Center for Medium-Range Weather Forecasts
     <br>&nbsp;&nbsp;&nbsp;<font size=4 color=red><b>JMA :</b></font> Japan Meteorological Agency
     </p>
   </li>

    <li> 
        <p align=left>  The regions referred to are: 
                    <font size=4 color=blue>G2 (GLB):</font>  Globe &nbsp;&nbsp;    
                    <font size=4 color=blue>NHX:</font> 20N-80N &nbsp;&nbsp;    
                    <font size=4 color=blue>SHX:</font> 20S-80S &nbsp;&nbsp;    
                    <font size=4 color=blue>TRO:</font> 20S-20N &nbsp;&nbsp;    
                    <font size=4 color=blue>PNA:</font> 20N-75N; 180E-320E &nbsp;&nbsp;   
                    <font size=4 color=blue>ASI:</font> 5S-55N; 60E-180E &nbsp;&nbsp;  
        </p>
    </li>
    <li> 
        <p align=left> Please see 
            <a href="../../doc/RMSE_decomposition.pdf" target="_blank"> this presentation 
            </a> for definitions of the various verification metrics.
        </p>
    </li>

    <br>
    <p align="left">
        <b>
            <font COLOR="blue" size=5>
                <p ALIGN="left">Model Update Information </p>
            </font> 
        </b>
    </p>


    <li> 
        <p align=left>&nbsp;&nbsp;&nbsp;
            <font size=4 ><b>CWB   :</b>
                <a href="../../doc/CWBGFS_profile.pdf" target="_blank"> CWB-GFS profile </a> .
            </font>   
        </p>
    </li>
    <li> 
        <p align=left>&nbsp;&nbsp;&nbsp;
            <font size=4 >
                <b>NCEP  : http://www.nco.ncep.noaa.gov/pmb/changes/ </b>
            </font>
        </p>
    </li>
    <li> 
        <p align=left>&nbsp;&nbsp;&nbsp;
            <font size=4 >
                <b>ECMWF : https://www.ecmwf.int/en/forecasts/documentation-and-support/changes-ecmwf-model </b>
            </font>
        </p>
    </li>
    <li> 
        <p align=left>&nbsp;&nbsp;&nbsp;
            <font size=4 >
                <b>JMA   : http://www.wis-jma.go.jp/ddb/latest_modelupgrade.txt </b>
            </font>
        </p>
    </li>
    </ul>         
</template>

<script>

  export default {
    name: 'display-home',
    data: function() {
        return {
            main_text:'這是另一個頁面',  
        }
    },
    computed: {
        
    },       

    methods: {
    },  

  }
</script>

<style scoped>
    .highlight-text {
        color:blue;
    }

    .subheading {
        padding: 50px
    }
</style>