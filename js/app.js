const configOptions = {
    "system_settings.connections.watchdog": ["off", "on"],
    "system_settings.sensor.setup.accessory": ["No Accessory", "Wind Screen 90 mm", "Wind Screen 50 mm", "WP30 Community", "WP30 Aircraft", "WP40 Community", "WP40 Aircraft", "WP40+2ndWS1 Community", "WP61 Community", "WP61 Aircraft", "WP62 Community", "WP62 Aircraft"],
    "system_settings.sensor.setup.sound_field": ["Free Field", "Diffuse Field 1/2 Inch", "Diffuse Field 1/4 Inch"],
    "system_settings.sensor.phantom_power.on_off": ["off", "on"],
    "system_settings.localization.decimal_separator": ["Dot", "Comma"],
    "system_settings.measurement.save_mode": ["manually", "prompt", "automatic"],
    "system_settings.measurement.name_prefix": ["!text value!"],
    "system_settings.m8_dio.pin2": ["sdi12", "spdif_out"],
    "system_settings.analog_output.interface_type": ["unbalanced", "balanced"],
    "system_settings.analog_output.source.xlr_in.scaling.select": ["gain", "fix_spl"],
    "system_settings.analog_output.source.xlr_in.scaling.gain.value": ["!float value!"],
    "system_settings.analog_output.source.xlr_in.scaling.fix_spl.ref_0dBu": ["!float value!"],
    "system_settings.analog_output.source.xlr_in.filter": ["off", "HP20Hz", "HP100Hz"],
    "SLM.auto_run": ["off", "on"],
    "SLM.percentile.1": ["!float value!"],
    "SLM.percentile.2": ["!float value!"],
    "SLM.percentile.3": ["!float value!"],
    "SLM.percentile.4": ["!float value!"],
    "SLM.percentile.5": ["!float value!"],
    "SLM.percentile.6": ["!float value!"],
    "SLM.percentile.7": ["!float value!"],
    "SLM.percentile.source": ["AF", "AS", "Aeq1", "CF", "CS", "Ceq1", "ZF", "ZS", "Zeq1"],
    "SLM.gliding_eq.average_time.1": ["1 sec", "5 sec", "10 sec", "15 sec", "30 sec", "1 min", "5 min", "10 min", "15 min", "30 min", "60 min"],
    "SLM.gliding_eq.average_time.2": ["1 sec", "5 sec", "10 sec", "15 sec", "30 sec", "1 min", "5 min", "10 min", "15 min", "30 min", "60 min"],
    "SLM.gliding_eq.average_time.3": ["1 sec", "5 sec", "10 sec", "15 sec", "30 sec", "1 min", "5 min", "10 min", "15 min", "30 min", "60 min"],
    "SLM.gliding_eq.average_time.4": ["1 sec", "5 sec", "10 sec", "15 sec", "30 sec", "1 min", "5 min", "10 min", "15 min", "30 min", "60 min"],
    "SLM.spectrum.octres": ["1/1", "1/3"],
    "SLM.spectrum.hold_time": ["3 sec", "5 sec", "10 sec"],
    "SLM.spectrum.fwtw": ["AF", "AS", "CF", "CS", "ZF", "ZS"],
    "SLM.screen.spectrum.reading.dash": ["live", "eq", "min", "max", "hold", "E", "Percentile 1", "Percentile 2", "Percentile 3", "Percentile 4", "Percentile 5", "Percentile 6", "Percentile 7", "---"],
    "SLM.screen.spectrum.reading.bar": ["live", "eq", "min", "max", "hold", "E", "Percentile 1", "Percentile 2", "Percentile 3", "Percentile 4", "Percentile 5", "Percentile 6", "Percentile 7", "---"],
    "SLM.screen.spectrum.axis.x.start": ["!unsigned int32 value!"],
    "SLM.screen.spectrum.axis.x.stop": ["!unsigned int32 value!"],
    "SLM.screen.spectrum.axis.y.start": ["!float value!"],
    "SLM.screen.spectrum.axis.y.resolution": ["20 dB/div", "10 dB/div", "5 dB/div", "2.5 dB/div"],
    "SLM.screen.spectrum.cursor.mode": ["automatic", "manual"],
    "SLM.screen.spectrum.cursor.position": ["!signed int32 value!"],
    "SLM.screen.123.panel.1.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.panel.1.limit_on": ["off", "on"],
    "SLM.screen.123.panel.2.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.panel.2.limit_on": ["off", "on"],
    "SLM.screen.123.panel.3.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.panel.3.limit_on": ["off", "on"],
    "SLM.screen.123.panel.4.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE"],
    "SLM.screen.123.panel.4.limit_on": ["off", "on"],
    "SLM.screen.123.panel.5.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.panel.5.limit_on": ["off", "on"],
    "SLM.screen.123.limit.1.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.limit.1.value.red": ["!float value!"],
    "SLM.screen.123.limit.1.value.amber": ["!float value!"],
    "SLM.screen.123.limit.2.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt","LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.limit.2.value.red": ["!float value!"],
    "SLM.screen.123.limit.2.value.amber": ["!float value!"],
    "SLM.screen.123.limit.3.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.limit.3.value.red": ["!float value!"],
    "SLM.screen.123.limit.3.value.amber": ["!float value!"],
    "SLM.screen.123.limit.4.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.limit.4.value.red": ["!float value!"],
    "SLM.screen.123.limit.4.value.amber": ["!float value!"],
    "SLM.screen.123.limit.5.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.screen.123.limit.5.value.red": ["!float value!"],
    "SLM.screen.123.limit.5.value.amber": ["!float value!"],
    "SLM.screen.123.layout": ["Layout 1", "Layout 2", "Layout 3", "Layout 4", "Layout 5", "Layout 6"],
    "SLM.xt_chart.graph.1.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k"],
    "SLM.xt_chart.graph.2.level": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.xt_chart.axis.y.start": ["!float value!"],
    "SLM.xt_chart.axis.y.resolution": ["20 dB/div", "10 dB/div", "5 dB/div", "2.5 dB/div"],
    "SLM.xt_chart.axis.x.resolution": ["1", "2", "3"],
    "SLM.kset.meas_time": ["5 s", "10 s", "15 s", "20 s"],
    "SLM.kset.k1": ["!float value!"],
    "SLM.kset.k2": ["!float value!"],
    "SLM.kset.k2_level": ["LCPK", "LCeq"],
    "SLM.report_logging.splitting.interval": ["daily", "hourly", "30 min", "20 min", "15 min", "10 min", "5 min"],
    "SLM.report_logging.splitting.offset": ["!signed int32 value!"],
    "SLM.report_logging.logging.utc_for_text_files": ["off", "on"],
    "SLM.report_logging.logging.interval": ["off", "1 s", "100 ms"],
    "SLM.report_logging.logging.file_format": ["text_tsv", "binary", "text_tsv + binary"],
    "SLM.report_logging.logging.folder_struct": ["standard", "noisemonitoring"],
    "SLM.report_logging.logging.audio.mode": ["off", "on", "markers only"],
    "SLM.report_logging.logging.audio.format": ["PCM_FLOAT32", "PCM_INT24", "ADPCM"],
    "SLM.report_logging.logging.audio.fs": ["96 kHz", "48 kHz", "24 kHz", "12 kHz"],
    "SLM.report_logging.logging.audio.adpcm0dBFS": ["AGC", "140 dBSPL", "120 dBSPL", "100 dBSPL"],
    "SLM.report_logging.logging.audio.markers_only.pre_recording_ms": ["!unsigned int32 value!"],
    "SLM.report_logging.logging.weather_interval": ["1 sec", "5 sec", "10 sec", "15 sec", "30 sec", "1 min", "5 min", "10 min", "15 min", "30 min", "60 min"],
    "SLM.report_logging.logging.marker_trigger.button.max_duration_ms": ["!unsigned int32 value!"],
    "SLM.report_logging.logging.marker_trigger.button.treat_all_as_1": ["off", "on"],
    "SLM.report_logging.logging.marker_trigger.button.mode": ["Toggle", "Hold"],
    "SLM.report_logging.logging.marker_trigger.button.source": ["Screen", "Keypad"],
    "SLM.report_logging.logging.marker_trigger.level.max_recording_duration_ms": ["!unsigned int32 value!"],
    "SLM.report_logging.logging.marker_trigger.level.active": ["off", "on"],
    "SLM.report_logging.logging.marker_trigger.level.evaluation.select": ["level1", "level1-level1"],
    "SLM.report_logging.logging.marker_trigger.level.evaluation.level1": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.report_logging.logging.marker_trigger.level.evaluation.level2": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.report_logging.logging.marker_trigger.level.trigger_condition": ["on level above", "on level below"],
    "SLM.report_logging.logging.marker_trigger.level.start.threshold": ["!float value!"],
    "SLM.report_logging.logging.marker_trigger.level.start.for_sec": ["!float value!"],
    "SLM.report_logging.logging.marker_trigger.level.stop.hysteresis": ["!float value!"],
    "SLM.report_logging.logging.marker_trigger.level.stop.for_sec": ["!float value!"],
    "SLM.report_logging.logging.marker_trigger.periodic.every_ms": ["!unsigned int32 value!"],
    "SLM.report_logging.logging.marker_trigger.periodic.active": ["off", "on"],
    "SLM.report_logging.logging.marker_trigger.periodic.duration_ms": ["!unsigned int32 value!"],
    "SLM.level_sel.1": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.2": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.3": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.4": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.5": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.6": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.7": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.8": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.9": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.level_sel.10": ["LAS", "LAS+k1", "LASmax", "LASmax+k1", "LASmin", "LASmin+k1", "LAF", "LAF+k1", "LAFmax", "LAFmax+k1", "LAFmin", "LAFmin+k1", "LAFinst", "LAI", "LAI+k1", "LAImax", "LAImax+k1", "LAImin", "LAImin+k1", "LAPK", "LAPKmax", "LAE", "LAE+k1", "LAeq", "LAeq_dt", "LAeq+k1", "Prev_LAeq", "Prev_LAeq+k1", "LAeq_g1", "LAeq_g1+k1", "LAeq_g1max", "LAeq_g1max+k1", "LAeq_g2", "LAeq_g2+k1", "LAeq_g2max", "LAeq_g2max+k1", "LAeq_g3", "LAeq_g3+k1", "LAeq_g3max", "LAeq_g3max+k1", "LAeq_g4", "LAeq_g4+k1", "LAeq_g4max", "LAeq_g4max+k1", "LAIeq", "LAIeq+k1", "LAFT3", "LAFT3eq", "LAFT5", "LAFT5eq", "LCS", "LCS+k2", "LCSmax", "LCSmax+k2", "LCSmin", "LCSmin+k2", "LCF", "LCF+k2", "LCFmax", "LCFmax+k2", "LCFmin", "LCFmin+k2", "LCFinst", "LCI", "LCI+k2", "LCImax", "LCImax+k2", "LCImin", "LCImin+k2", "LCPK", "LCPK+k2", "LCPKmax", "LCPKmax+k2", "LCE", "LCE+k2", "LCeq", "LCeq_dt", "LCeq+k2", "Prev_LCeq", "Prev_LCeq+k2", "LCeq_g1", "LCeq_g1+k2", "LCeq_g1max", "LCeq_g1max+k2", "LCeq_g2", "LCeq_g2+k2", "LCeq_g2max", "LCeq_g2max+k2", "LCeq_g3", "LCeq_g3+k2", "LCeq_g3max", "LCeq_g3max+k2", "LCeq_g4", "LCeq_g4+k2", "LCeq_g4max", "LCeq_g4max+k2", "LCIeq", "LCIeq+k2", "LZS", "LZSmax", "LZSmin", "LZF", "LZFmax", "LZFmin", "LZFinst", "LZI", "LZImax", "LZImin", "LZPK", "LZPKmax", "LZE", "LZeq", "LZeq_dt", "Prev_LZeq", "LZIeq", "Lperc1", "Lperc2", "Lperc3", "Lperc4", "Lperc5", "Lperc6", "Lperc7", "k1", "k2", "---", "LAFT5eq-LAeq", "LAIeq-LAeq", "LCeq-LAeq", "LCeq_g1-LAeq_g1", "LCeq_g2-LAeq_g2", "LCeq_g3-LAeq_g3", "LCeq_g4-LAeq_g4"],
    "SLM.report_logging.levels": ["all", "selected"],
    "SLM.report_logging.spectra": ["off", "eq", "max", "min"],
    "SLM.timer.mode": ["Continuous", "Single", "Repeated"],
    "SLM.timer.set.single_ms": ["!unsigned int32 value!"],
    "SLM.timer.set.repeated_ms": ["!unsigned int32 value!"],
    "SLM.scheduler.select": ["off", "daily"],
    "SLM.scheduler.daily.start_time.hour": ["!unsigned int32 value!"],
    "SLM.scheduler.daily.start_time.minute": ["!unsigned int32 value!"],
    "SLM.scheduler.daily.end_time.hour": ["!unsigned int32 value!"],
    "SLM.scheduler.daily.end_time.minute": ["!unsigned int32 value!"],
    "SLM.scheduler.power_save": ["off", "on"],
    "SLM.scheduler.power_save_delay_minutes": ["!unsigned int32 value!"],
    "SLM.measurement_series": ["off", "on"],
    "RT.screen.result_graph.reading.dash": ["EDT", "T15", "T20", "T30", "---"],
    "RT.screen.result_graph.reading.bar": ["EDT", "T15", "T20", "T30", "---"],
    "RT.octres": ["1/1", "1/3"],
    "RT.min_trigger_level": ["!float value!"],
    "RT.report.T30": ["off", "on"],
    "RT.report.T20": ["off", "on"],
    "RT.report.T15": ["off", "on"],
    "RT.report.EDT": ["off", "on"],
    "RT.report.audio.mode": ["off", "on"],
    "RT.measurement_series": ["off", "on"],
    "SI.setting.speaker_positions": ["!text value!"],
    "SI.setting.meas_duration": ["!text value!"],
    "SI.setting.rt.mode": ["T20", "T30"],
    "SI.setting.rt.min_trigger_level": ["!float value!"],
    "SI.project.receiving_room_volume": ["!float value!"],
    "SI.project.sending_room_volume": ["!float value!"],
    "SI.project.common_area_size": ["!float value!"],
    "SI.project.angle_of_incidence": ["!float value!"],
    "SI.slm.spectrum.axis.y.start": ["!float value!"],
    "SI.slm.spectrum.axis.y.resolution": ["20 dB/div", "10 dB/div", "5 dB/div", "2.5 dB/div"]
};

function parseConfig(cfgText) {
  const match = cfgText.match(/##CONFIG:\s*([\s\S]*)/);
  if (!match) throw new Error('No ##CONFIG: section found');
  return JSON.parse(match[1].trim());
}

function setNestedValue(obj, pathArray, value) {
  let target = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    target = target[pathArray[i]];
  }
  target[pathArray[pathArray.length - 1]] = value;
}

function renderJson(obj, container, currentPath = '') {
  if (typeof obj !== 'object' || obj === null) return;
  const isArray = Array.isArray(obj);
  const keys = isArray ? obj : Object.keys(obj);

  for (const key in keys) {
    const actualKey = isArray ? key : keys[key];
    const value = isArray ? obj[key] : obj[actualKey];
    const wrapper = document.createElement('div');
    wrapper.className = 'node';

    const fullPath = currentPath ? `${currentPath}.${actualKey}` : actualKey;

    if (typeof value === 'object' && value !== null) {
      const keySpan = document.createElement('span');
      keySpan.className = 'key';
      keySpan.textContent = (isArray ? '' : actualKey + ': ') + (Array.isArray(value) ? '[...]' : '{...}');

      const child = document.createElement('div');
      child.className = 'value';
      child.style.display = 'block';
      renderJson(value, child, fullPath);

      keySpan.onclick = () => {
        child.style.display = child.style.display === 'none' ? 'block' : 'none';
      };

      wrapper.appendChild(keySpan);
      wrapper.appendChild(child);
    } else {
      const keyLabel = document.createElement('span');
      keyLabel.textContent = (isArray ? '' : actualKey + ': ');
      const pathOptions = configOptions[fullPath];
      let input;
      let showWarning = false;

      if (pathOptions && pathOptions.length === 1) {
        if (pathOptions[0] === '!float value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.step = 'any';
        } else if (pathOptions[0] === '!unsigned int32 value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.min = '0';
          input.max = '4294967295';
          input.step = '1';
        } else if (pathOptions[0] === '!text value!') {
          input = document.createElement('input');
          input.type = 'text';
        } else {
          input = document.createElement('select');
          pathOptions.forEach(opt => {
            const option = new Option(opt, opt, opt === value, opt === value);
            input.appendChild(option);
          });
          if (!pathOptions.includes(value)) showWarning = true;
        }
      } else if (pathOptions) {
        input = document.createElement('select');
        pathOptions.forEach(opt => {
          const option = new Option(opt, opt, opt === value, opt === value);
          input.appendChild(option);
        });
        if (!pathOptions.includes(value)) {
          // Add the invalid value as an option so it can be seen/selected
          const invalidOption = new Option(value, value, true, true);
          invalidOption.style.color = 'red';
          input.appendChild(invalidOption);
          showWarning = true;
        }
      } else {
        input = document.createElement('input');
        input.type = 'text';
        input.value = value;
      }

      input.className = 'edit-field';
      input.dataset.path = fullPath;
      if (!input.value) input.value = value;

      wrapper.appendChild(keyLabel);
      wrapper.appendChild(input);

      if (showWarning) {
        const warn = document.createElement('span');
        warn.textContent = ' ⚠ Value not in allowed options!';
        warn.style.color = 'red';
        warn.style.marginLeft = '8px';
        wrapper.appendChild(warn);
      }
    }

    container.appendChild(wrapper);
  }
}

function updateJsonView(obj) {
  const container = document.getElementById('jsonView');
  container.innerHTML = '';
  renderJson(obj, container);
}

// Helper to check for invalid values in the JSON
function hasInvalidValues(obj, path = '') {
  if (typeof obj !== 'object' || obj === null) return false;
  for (const key in obj) {
    const fullPath = path ? `${path}.${key}` : key;
    const value = obj[key];
    const options = configOptions[fullPath];
    if (options && Array.isArray(options) && !options.includes(value)) {
      return true;
    }
    if (typeof value === 'object' && value !== null) {
      if (hasInvalidValues(value, fullPath)) return true;
    }
  }
  return false;
}

let configObj = {};

document.getElementById('cfgFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    try {
      configObj = parseConfig(reader.result);
      updateJsonView(configObj);
      document.getElementById('downloadBtn').style.display = 'inline-block';
    } catch (err) {
      alert('Error parsing config: ' + err.message);
    }
  };
  reader.readAsText(file);
});

document.getElementById('downloadBtn').onclick = function () {
  const inputs = document.querySelectorAll('.edit-field');
  inputs.forEach(input => {
    const path = input.dataset.path.split('.');
    setNestedValue(configObj, path, input.value);
  });

  if (hasInvalidValues(configObj)) {
  const proceed = confirm('Warning: The config file contains invalid data that needs to be fixed!\nDo you want to continue downloading?');
  if (!proceed) return;
  }

  const blob = new Blob(['##CONFIG:\n' + JSON.stringify(configObj, null, 2)], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'modified.xl3cfg';
  a.click();
};
