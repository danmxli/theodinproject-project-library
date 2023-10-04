import Image from "next/image";
import tabledemo from "./tables/tabledemo.png"
import CodeDisplay from "../codedisplay";

const TableDemo = () => {
  const htmlTableCode = `
    <table>
        <tr>
            <th colspan="2"></th>
            <th>Name</th>
            <th>Mass (10<sup>24</sup>kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m<sup>3</sup>)</th>
            <th>Gravity (m/s<sup>2</sup>)</th>
            <th>Length of day (hours)</th>
            <th>Distance from Sun (10<sup>6</sup>km)</th>
            <th>Mean temperature (°C)</th>
            <th>Number of moons</th>
        </tr>
        <tr>
            <td rowspan="2" colspan="2">Terrestrial planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
            <td>3.7</td>
            <td>4222.6</td>
            <td>57.9</td>
            <td>167</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Earth</td>
            <td>5.97</td>
            <td>12,756</td>
            <td>5514</td>
            <td>9.8</td>
            <td>24.0</td>
            <td>149.6</td>
            <td>15</td>
            <td>1</td>
        </tr>
        <tr>
            <td rowspan="4" colspan="1">Jovian Planets</td>
            <td rowspan="2" rowspan="1">Gas Giants</td>
            <td>Jupiter</td>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
            <td>9.9</td>
            <td>778.6</td>
            <td>-110</td>
            <td>67</td>
        </tr>
        <tr>
            <td>Jupiter</td>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
            <td>9.9</td>
            <td>778.6</td>
            <td>-110</td>
            <td>67</td>
        </tr>
        <tr>
            <td colspan="1">Ice Giants</td>
            <td>Uranus</td>
            <td>102</td>
            <td>49,528</td>
            <td>1638</td>
            <td>11.0</td>
            <td>16.1</td>
            <td>4495.1</td>
            <td>200</td>
            <td>14</td>
        </tr>
    </table>
  `;    
    return(
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">HTML Table</h1>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                You can make two-dimensional tables with rows and columns using HTML Tables.
                Create a table with table tags, then add elements for rows, columns, headers, and more.
            </p>
            <Image src={tabledemo} alt="my_image" width={1000} className="object-cover rounded-lg mb-2"/>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                Tables can be used to meaningfully show tabular data. It can be used with custom CSS to create a stunning presentation.
            </p>
            <h2 className="dark:text-indigo-400 text-xl mb-2">Source code</h2>
            <div>
                <CodeDisplay code={htmlTableCode} />
            </div>
        </div>
    );
};

export default TableDemo