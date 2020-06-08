import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import imageupload from '../screens/imageupload'
import imageshow from '../screens/imageshow'
const SwitchNavigator = createSwitchNavigator(
    {
        imageupload: {
            screen: imageupload
        },
        imageshow: {
            screen: imageshow
        }
    },
    {
        initialRouteName: 'imageupload'
    }
)

export default createAppContainer(SwitchNavigator)
