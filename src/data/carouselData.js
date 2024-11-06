import harvestImg from "../Images/cropped_images/Harvest.png";
import biocharImg from "../Images/cropped_images/biochar.png";
import dacImg from "../Images/cropped_images/Dac.png";
import hederaHelixImg from "../Images/hedera_helix.png";
import solarArrayImg from "../Images/solararray.png";

const carouselData = [
    {
        tabLabel: "What is Carbon Good?",
        slides:[
            {
                title: "Biomass and Food Production",
                image: harvestImg,
                text: "CarbonGood uses elevated CO2 levels in fossil ,fuel emissions to accelerate biomass growth, coupling that with optimized lighting and extended daylight to produce a virtuous cycle. HCCAS is also a high-density format yielding much more biomass, much faster, from each square foot of land than any other agricultural solution can do, enabling it to lock-up megatons of carbon in useful product. And do so cleanly, with no pollution, no pesticide, and no herbicide."
            },
            {
                title: "Biomass to Biochar",
                image: biocharImg,
                text: "Biocharring the biomass permanently sequesters carbon as valuable products (emissions from the charring process are also captured). Biomass height is constrained by the format but grasses, cereals and other fast-growing species work, and work well. Another option is industrial hemp which, among many  other uses, is the raw material for carbon-negative hempcrete, a material that permanently locks-up CO2 in buildings."
            },
            {
                title: "Carbon Capture",
                image: dacImg,
                text: "CarbonGood uses established off-the-shelf and cost-effective technology to safely capture CO2 from any emitter or directly from the air with zero pollution. We convert captured CO2 on-site to biomass and then to a high value, immediately usable product (biochar) that is in growing demand."
            }
        ]
    },
    {
        tabLabel: "How Does It Work?",
        slides:[
            {
                title: <>Improved CO<sub>2</sub> Uptake</>,
                image: solarArrayImg,
                text: ""
            },
            {
                title: "Environmental Benefits",
                image: hederaHelixImg,
                text: "CO2 emissions from energy and industry account for roughly half of global emissions. We need a solution for both sectors."
            },
            {
                title: "Increased Crop Yields",
                image: solarArrayImg,
                text: "Hydroponics eliminates weed and pest damage - a key factor in yield loss - by  excluding them. That means no dangerous chemicals - and a further 30-40% output boost."
            },
            {
                title: "Improved Growing Speeds",
                image: solarArrayImg,
                text: "LED lighting boosts growing speed by up to 50%."
            },
            {
                title: "No Pollution",
                image: solarArrayImg,
                text: "Nutrients are delivered just where they're needed, in just the right amount, there's no mass spraying that wastes 90% of the chemicals - so there's no run-off pollution, which means  less  toxic algal bloom  in our seas and lakes, protecting marine species and  securing another food source."
            },
            {
                title: "Immune To Weather and Seasonal Change",
                image: solarArrayImg,
                text: " it's immune to weather which in the West cuts agricultural yield by 20% - we get that back too. it has   no seasons   and (almost)   no night- unike most agriculture, it's virtually 24/7/365. That gives us 30%+ more growing time on average."
            },
        ]
    },
    {
        tabLabel:"Why Do We Need It?",
        slides:[
            {
                title:"Environmental Benefits",
                image: hederaHelixImg,
                text: <>CO<sub>2</sub> emissions from energy and industry account for roughly half of global emissions. We need a solution for both sectors.</>
            },
            {
                title:"Environmental Benefits",
                image: hederaHelixImg,
                text: <>CO<sub>2</sub> emissions from energy and industry account for roughly half of global emissions. We need a solution for both sectors.</>
            },
            {
                title:"Environmental Benefits",
                image: hederaHelixImg,
                text: <>CO<sub>2</sub> emissions from energy and industry account for roughly half of global emissions. We need a solution for both sectors.</>
            },
        ]
    }
];

export default carouselData