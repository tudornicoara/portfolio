import React from "react";
import './background.scss';
import Particles from "react-tsparticles";
import {ISourceOptions} from "tsparticles-engine";
import type { Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

interface Props {
        children?: React.ReactNode;
        isMobile: boolean;
}

export default function Background({children, isMobile}: Props) {
    async function customInit(engine: Engine): Promise<void> {
        await loadTrianglesPreset(engine);
    }
    
    const options: ISourceOptions = {
        preset: 'triangles',
        background: {
            color: '#1e1f1e'
        },
        fullScreen: false,
        particles: {
            number: {
                value: isMobile ? 20 : 100
            },
            move: {
                speed: 2
            },
            links: {
                triangles: {
                    enable: !isMobile
                }
            }
        },
        // TODOO: Add interactive animations
        // interactivity: {
        //     detectsOn: 'window',
        //     events: {
        //         onHover: {
        //             enable: true,
        //             mode: "connect",
        //             parallax: {
        //                 enable: true,
        //                 force: 60,
        //                 smooth: 10
        //             }
        //         }
        //     },
        //     modes: {
        //         connect: {
        //             distance: 80,
        //             links: {
        //                 opacity: 0.5
        //             },
        //             radius: 120
        //         }
        //     }
        // }
    };
        
    return (
        <Particles options={options} init={customInit} />
    )
}