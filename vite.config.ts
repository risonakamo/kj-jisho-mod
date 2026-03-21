import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import {LogLevel,RollupLog,LogHandler} from "rollup";

declare const __dirname:string;

export default defineConfig({
    mode:"development",

    plugins:[
        checker({
            typescript:true
        }),
    ],

    resolve:{
        tsconfigPaths:true,
        alias:{
            "@":`${__dirname}/web`,
        }
    },

    build:{
        lib:{
            name:"jishomod",
            fileName:"jishomod",
            entry:{
                e1:`${__dirname}/web/cs/kj-jisho-mod-main.ts`,
            },
            formats:["iife"]
        },

        outDir:`${__dirname}/build-cs`,
        target:["esnext"],
        sourcemap:true,
        // emptyOutDir:false,
        minify:false,

        rollupOptions:{
            onLog(level:LogLevel,log:RollupLog,handler:LogHandler):void
            {
                if (log.message.includes("Error when using sourcemap for reporting"))
                {
                    return;
                }

                handler(level,log);
            }
        }
    },
});