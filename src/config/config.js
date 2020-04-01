import config from "react-global-configuration"
import configFile from "./config.json"

export const fetchConfig = () => {
    try {
        config.set(configFile)
        return true
    } catch (error) {
        return false
    }
    

}
