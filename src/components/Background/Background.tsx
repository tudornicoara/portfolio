import React from "react";
import './background.scss';
import Particles from "react-tsparticles";
import {ISourceOptions} from "tsparticles-engine";
import type { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

interface Props {
        children?: React.ReactNode;
}

export default function Background({children}: Props) {
    async function customInit(engine: Engine): Promise<void> {
        await loadFirePreset(engine);
    }
    
    const options: ISourceOptions = {
        preset: 'fire',
        fullScreen: false,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    };
        
    return (
        <Particles options={options} init={customInit} />
    )
}