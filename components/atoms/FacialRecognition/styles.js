import styled from 'styled-components'
import { theme, clockProps } from '../../../styles'

export const Eye = styled.div`
    --size: ${({ display }) => display ? '90px' : 0};
    width: var(--size);
    height: var(--size);
    background-color: white;
    border-radius: 75% 0;
    transform: rotate(45deg);
    overflow: hidden;
    z-index: 1;
    transition-duration: 1s;
    background-color: white;
    margin: ${({ margin }) => clockProps(margin)};

    .shut {
        width: calc(var(--size) * 1.5);
        height: calc(var(--size) * 0.8 + 1px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 1;

        span {
            display: block;
            width: 100%;
            height: ${({ opened='100%' })=> opened};
            background-color: ${theme.colors.neutrals['800']};
            border-radius: 0 0 60% 60%;
            transition: 1.5s 1s;
        }
    }

    .ball {
        width: calc(var(--size) * 0.4);
        height: calc(var(--size) * 0.4);
        background: radial-gradient(
            circle, 
            ${theme.colors.neutrals['900']} 30%, 
            ${theme.colors.primary['300']} 40%
        );
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${({ opened='0%' })=> opened == '0%' 
            ? 'translate(-50%, -50%)'
            : 'translate(-10%, -10%)' 
        };
        transition: 1.5s 1s;
    }
`
