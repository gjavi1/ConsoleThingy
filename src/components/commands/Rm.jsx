import Utils from '../console/Util';
import React from 'react';

export default class Rm {
    static match() {
        return "rm";
    }

    static do(command, env) {
        let commands = command.split(" ");
        let message = "";

        if (commands.length === 1) {
            message = "touch: missing file operand";
        }

        commands.shift();
        
        commands.forEach((val) => {
            Utils.createFile(val.trim());
        });
        
        return {message: message}
    }

    static help() {
        return <span>Deletes things</span>
    }
}