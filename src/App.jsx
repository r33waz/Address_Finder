import { useEffect, useState } from "react";
import "./App.css";
import MapComponent from "./components/map";

function App() {
  const [ipData, setIpData] = useState(null);
  const [ip, setIp] = useState("");
  console.log(ipData);
  useEffect(() => {
    const fetchIpData = async () => {
      try {
        // Fetch additional data using the obtained IP address
        const apiResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!apiResponse.ok) {
          throw new Error("Error fetching IP data");
        }

        const apiData = await apiResponse.json();
        setIpData(apiData);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    fetchIpData();
  }, [ip]);

  return (
    <>
      <div className="first-class">
        <h1 className="h1">Enter Your IP Address</h1>
        <input
          className="input"
          type="text"
          placeholder="Enter Ip address"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
      </div>
      <div className="box">
        {ipData ? (
        <>
          <div className="flex-items">
            <table>
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>{ipData?.ip}</td>
                </tr>
                <tr>
                  <td>Network</td>
                  <td>{ipData?.network}</td>
                </tr>
                <tr>
                  <td>Version</td>
                  <td>{ipData?.version}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{ipData?.city}</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>{ipData?.region}</td>
                </tr>
                <tr>
                  <td>Region Code</td>
                  <td>{ipData?.region_code}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{ipData?.country}</td>
                </tr>
                <tr>
                  <td>Country Code</td>
                  <td>{ipData?.country_code}</td>
                </tr>
                <tr>
                  <td>Country Code ISO3</td>
                  <td>{ipData?.country_code_iso3}</td>
                </tr>
                <tr>
                  <td>Country Capital</td>
                  <td>{ipData?.country_capital}</td>
                </tr>
                <tr>
                  <td>Latitude</td>
                  <td>{ipData?.latitude}</td>
                </tr>
                <tr>
                  <td>Longitude</td>
                  <td>{ipData?.longitude}</td>
                </tr>
                <tr>
                  <td>Timezone</td>
                  <td>{ipData?.timezone}</td>
                </tr>
                <tr>
                  <td>UTC Offset</td>
                  <td>{ipData?.utc_offset}</td>
                </tr>
                <tr>
                  <td>Country Calling Code</td>
                  <td>{ipData?.country_calling_code}</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{ipData?.currency}</td>
                </tr>
                <tr>
                  <td>Currency Name</td>
                  <td>{ipData?.currency_name}</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>{ipData?.languages}</td>
                </tr>
                <tr>
                  <td>Country Area</td>
                  <td>{ipData?.country_area}sq km</td>
                </tr>
                <tr>
                  <td>Country Population</td>
                  <td>{ipData?.country_population}</td>
                </tr>
                <tr>
                  <td>ASN</td>
                  <td>{ipData?.asn}</td>
                </tr>
                <tr>
                  <td>Org</td>
                  <td>{ipData?.org}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-items">
            <MapComponent ipDatas={ipData} />
          </div>
        </>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    </>
  );
}

export default App;
