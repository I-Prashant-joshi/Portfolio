import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import resume from '/Resume.pdf'
export const navData=[
    {
        name:"About",
        key:0,
        linkname:"about"
    },
    {
        name:"Projects",
        key:1,
        linkname:"projects"
    },
    {
        name:"Contact",
        key:2,
        linkname:"contact"
    },
 
]
   export const navIcon=[
        {
            icon:DescriptionIcon,
            key:1,
            linkname:resume,
            Download:"Resume"
        },
        {
            icon:LinkedInIcon,
            key:2,
            linkname:"https://www.linkedin.com/in/prashant-joshi09/"
        },
    ]