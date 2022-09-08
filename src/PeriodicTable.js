import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function PeriodicTable() {
  return (
    <React.Fragment>   
        <h1> The Periodic Table </h1>
        <div id="Elements">
            <ol id = "Table">
            <li id = "H" class = "row1 col1 cat-diatomic_nonmetal">
                <div> 1 </div>
                <div> H </div>
                <div id="nameH"> Hydrogen </div>
                <div> 1.008 </div>
                <button type="button" id="btnH" onclick="open_dialog( 'Hydrogen');">details.            </button>
            </li>
            
            <li id="He" class="row1 col18 cat-noble_gas">
                <div>2</div>
                <div>He</div>
                <div id="nameHe">Helium</div>
                <div>4.0026022</div>
                <button type="button" id="btnHe" onclick="open_dialog('Helium');">details.             </button>
            </li>
            
            <li id="Li" class="row2 col1 cat-alkali_metal">
                <div>3</div>
                <div>Li</div>
                <div id="nameLi">Lithium</div>
                <div>6.94</div>
                <button type="button" id="btnLi" onclick="open_dialog('Lithium');">details.           </button>
            </li>
            
            <li id="Be" class="row2 col2 cat-alkaline_earth_metal">    
                <div>4</div>
                <div>Be</div>
                <div id="nameBe">Beryllium</div>
                <div>9.01218315</div>
                <button type="button" id="btnBe" onclick="open_dialog('Beryllium');">details.             </button>
            </li>
            
            <li id="B" class="row2 col13 cat-metalloid">
                <div>5</div>
                <div>B</div>
                <div id="nameB">Boron</div>
                <div>10.81</div>
                <button type="button" id="btnB" onclick="open_dialog('Boron');">details.             </button>
            </li>
            
            <li id="C" class="row2 col14 cat-polyatomic_nonmetal">
                <div>6</div>
                <div>C</div>
                <div id="nameC">Carbon</div>
                <div>12.011</div>
                <button type="button" id="btnC" onclick="open_dialog('Carbon');">details.             </button>
            </li>
            
            <li id="N" class="row2 col15 cat-diatomic_nonmetal">
                <div>7</div>
                <div>N</div>
                <div id="nameN">Nitrogen</div>
                <div>14.007</div>
                <button type="button" id="btnN" onclick="open_dialog('Nitrogen');">details.             </button>
                </li>
            
            <li id="O" class="row2 col16 cat-diatomic_nonmetal">
                <div>8</div>
                <div>O</div>
                <div id="nameO">Oxygen</div>
                <div>15.999</div>
                <button type="button" id="btnO" onclick="open_dialog('Oxygen');">details.             </button>
            </li>
            
            <li id="F" class="row2 col17 cat-diatomic_nonmetal">
                <div>9</div>
                <div>F</div>
                <div id="nameF">Fluorine</div>
                <div>18.9984031636</div>
                <button type="button" id="btnF" onclick="open_dialog('Fluorine');">details.             </button>
            </li>
            
            <li id="Ne" class="row2 col18 cat-noble_gas">
                <div>10</div>
                <div>Ne</div>
                <div id="nameNe">Neon</div>
                <div>20.17976</div>
                <button type="button" id="btnNe" onclick="open_dialog('Neon');">details.             </button>
            </li>
            
            <li id="Na" class="row3 col1 cat-alkali_metal">
                <div>11</div>
                <div>Na</div>
                <div id="nameNa">Sodium</div>
                <div>22.989769282</div>
                <button type="button" id="btnNa" onclick="open_dialog('Sodium');">details.             </button>
            </li>
            
            <li id="Mg" class="row3 col2 cat-alkaline_earth_metal">
                <div>12</div>
                <div>Mg</div>
                <div id="nameMg">Magnesium</div>
                <div>24.305</div>
                <button type="button" id="btnMg" onclick="open_dialog('Magnesium');">details.             </button>
            </li>
            
            <li id="Al" class="row3 col13 cat-post-transition_metal">
                <div>13</div>
                <div>Al</div>
                <div id="nameAl">Aluminium</div>
                <div>26.98153857</div>
                <button type="button" id="btnAl" onclick="open_dialog('Aluminium');">details.             </button>
            </li>
            
            <li id="Si" class="row3 col14 cat-metalloid">
                <div>14</div>
                <div>Si</div>
                <div id="nameSi">Silicon</div>
                <div>28.085</div>
                <button type="button" id="btnSi" onclick="open_dialog('Silicon');">details.             </button>
            </li>
            
            <li id="P" class="row3 col15 cat-polyatomic_nonmetal">
                <div>15</div>
                <div>P</div>
                <div id="nameP">Phosphorus</div>
                <div>30.9737619985</div>
                <button type="button" id="btnP" onclick="open_dialog('Phosphorus');">details.             </button>
            </li>
            
            <li id="S" class="row3 col16 cat-polyatomic_nonmetal">
                <div>16</div>
                <div>S</div>
                <div id="nameS">Sulfur</div>
                <div>32.06</div>
                <button type="button" id="btnS" onclick="open_dialog('Sulfur');">details.             </button>
            </li>
            
            <li id="Cl" class="row3 col17 cat-diatomic_nonmetal">
                <div>17</div>
                <div>Cl</div>
                <div id="nameCl">Chlorine</div>
                <div>35.45</div>
                <button type="button" id="btnCl" onclick="open_dialog('Chlorine');">details.             </button>
            </li>
            
            <li id="Ar" class="row3 col18 cat-noble_gas"><div>18</div>
                <div>Ar</div>
                <div id="nameAr">Argon</div>
                <div>39.9481</div>
                <button type="button" id="btnAr" onclick="open_dialog('Argon');">details.             </button>
            </li>
            
            <li id="K" class="row4 col1 cat-alkali_metal">
                <div>19</div>
                <div>K</div>
                <div id="nameK">Potassium</div>
                <div>39.09831</div>
                <button type="button" id="btnK" onclick="open_dialog('Potassium');">details.             </button>
            </li>
            
            <li id="Ca" class="row4 col2 cat-alkaline_earth_metal">
                <div>20</div>
                <div>Ca</div>
                <div id="nameCa">Calcium</div>
                <div>40.0784</div>
                <button type="button" id="btnCa" onclick="open_dialog('Calcium);">details.             </button>
            </li>
            
            <li id="Sc" class="row4 col3 cat-transition_metal">
                <div>21</div>
                <div>Sc</div>
                <div id="nameSc">Scandium</div>
                <div>44.9559085</div>
                <button type="button" id="btnSc" onclick="open_dialog('Scandium');">details.             </button>
            </li>
            
            <li id="Ti" class="row4 col4 cat-transition_metal">
                <div>22</div>
                <div>Ti</div>
                <div id="nameTi">Titanium</div>
                <div>47.8671</div>
                <button type="button" id="btnTi" onclick="open_dialog('Titanium');">details.             </button>
            </li>
            
            <li id="V" class="row4 col5 cat-transition_metal">
                <div>23</div>
                <div>V</div>
                <div id="nameV">Vanadium</div>
                <div>50.94151</div>
                <button type="button" id="btnV" onclick="open_dialog('Vanadium');">details.             </button>
            </li>
            
            <li id="Cr" class="row4 col6 cat-transition_metal">
                <div>24</div>
                <div>Cr</div>
                <div id="nameCr">Chromium</div>
                <div>51.99616</div>
                <button type="button" id="btnCr" onclick="open_dialog('Chromium');">details.             </button>
            </li>
            
            <li id="Mn" class="row4 col7 cat-transition_metal">
                <div>25</div>
                <div>Mn</div>
                <div id="nameMn">Manganese</div>
                <div>54.9380443</div>
                <button type="button" id="btnMn" onclick="open_dialog('Manganese');">details.              </button>
            </li>
            
            <li id="Fe" class="row4 col8 cat-transition_metal">
                <div>26</div>
                <div>Fe</div>
                <div id="nameFe">Iron</div>
                <div>55.8452</div>
                <button type="button" id="btnFe" onclick="open_dialog('Iron');">details.</button>  
            </li>
            
            <li id="Co" class="row4 col9 cat-transition_metal">
                <div>27</div>
                <div>Co</div>
                <div id="nameCo">Cobalt</div>
                <div>58.9331944</div>
                <button type="button" id="btnCo" onclick="open_dialog('Cobalt');">details.</button>
            </li>
            
            <li id="Ni" class="row4 col10 cat-transition_metal">
                <div>28</div>
                <div>Ni</div>
                <div id="nameNi">Nickel</div>
                <div>58.69344</div><button type="button" id="btnNi" onclick="open_dialog('Nickel');">details.</button>
            </li>
            
            <li id="Cu" class="row4 col11 cat-transition_metal">
                <div>29</div>
                <div>Cu</div>
                <div id="nameCu">Copper</div>
                <div>63.5463</div>
                <button type="button" id="btnCu" onclick="open_dialog('Copper');">details.</button>
            </li>
            
            <li id="Zn" class="row4 col12 cat-transition_metal">
                <div>30</div>
                <div>Zn</div>
                <div id="nameZn">Zinc</div>
                <div>65.382</div>
                <button type="button" id="btnZn" onclick="open_dialog('Zinc');">details.</button>
            </li>
            
            <li id="Ga" class="row4 col13 cat-post-transition_metal">
                <div>31</div>
                <div>Ga</div>
                <div id="nameGa">Gallium</div>
                <div>69.7231</div><button type="button" id="btnGa" onclick="open_dialog('Gallium');">details.</button>
            </li>
            
            <li id="Ge" class="row4 col14 cat-metalloid">
                <div>32</div>
                <div>Ge</div>
                <div id="nameGe">Germanium</div>
                <div>72.6308</div>
                <button type="button" id="btnGe" onclick="open_dialog('Germanium');">details.
                </button>
            </li>
            
            <li id="As" class="row4 col15 cat-metalloid">
                <div>33</div>
                <div>As</div>
                <div id="nameAs">Arsenic</div>
                <div>74.9215956</div>
                <button type="button" id="btnAs" onclick="open_dialog('Arsenic');">details.</button>
            </li>
            
            <li id="Se" class="row4 col16 cat-polyatomic_nonmetal">
                <div>34</div>
                <div>Se</div>
                <div id="nameSe">Selenium</div>
                <div>78.9718</div>
                <button type="button" id="btnSe" onclick="open_dialog('Selenium');">details.
                </button>
            </li>
            
            <li id="Br" class="row4 col17 cat-diatomic_nonmetal">
                <div>35</div>
                <div>Br</div>
                <div id="nameBr">Bromine</div>
                <div>79.904</div>
                <button type="button" id="btnBr" onclick="open_dialog('Bromine');">details.</button>
            </li>
            
            <li id="Kr" class="row4 col18 cat-noble_gas">
                <div>36</div>
                <div>Kr</div>
                <div id="nameKr">Krypton</div>
                <div>83.7982</div>
                <button type="button" id="btnKr" onclick="open_dialog('Krypton');">details.</button>
            </li>
            
            <li id="Rb" class="row5 col1 cat-alkali_metal">
                <div>37</div>
                <div>Rb</div>
                <div id="nameRb">Rubidium</div>
                <div>85.46783</div>
                <button type="button" id="btnRb" onclick="open_dialog('Rubidium');">details.
                </button>
            </li>
            
            <li id="Sr" class="row5 col2 cat-alkaline_earth_metal">
                <div>38</div>
                <div>Sr</div>
                <div id="nameSr">Strontium</div>
                <div>87.621</div>
                <button type="button" id="btnSr" onclick="open_dialog('Strontium');">details.
                </button>
            </li>
            
            <li id="Y" class="row5 col3 cat-transition_metal">
                <div>39</div>
                <div>Y</div>
                <div id="nameY">Yttrium</div>
                <div>88.905842</div>
                <button type="button" id="btnY" onclick="open_dialog('Yttrium');">details.</button>
            </li>
            
            <li id="Zr" class="row5 col4 cat-transition_metal">
                <div>40</div>
                <div>Zr</div>
                <div id="nameZr">Zirconium</div>
                <div>91.2242</div>
                <button type="button" id="btnZr" onclick="open_dialog('Zirconium');">details.
                </button>
            </li>
            
            <li id="Nb" class="row5 col5 cat-transition_metal">
                <div>41</div>
                <div>Nb</div>
                <div id="nameNb">Niobium</div>
                <div>92.906372</div>
                <button type="button" id="btnNb" onclick="open_dialog('Niobium');">details.</button>
            </li>
            
            <li id="Mo" class="row5 col6 cat-transition_metal">
                <div>42</div>
                <div>Mo</div>
                <div id="nameMo">Molybdenum</div>
                <div>95.951</div>
                <button type="button" id="btnMo" onclick="open_dialog('Molybdenum');">details.    
                </button>
            </li>
            
            <li id="Tc" class="row5 col7 cat-transition_metal">
                <div>43</div>
                <div>Tc</div>
                <div id="nameTc">Technetium</div>
                <div>98</div>
                <button type="button" id="btnTc" onclick="open_dialog('Technetium');">details.
                </button>
            </li>
            
            <li id="Ru" class="row5 col8 cat-transition_metal">
                <div>44</div>
                <div>Ru</div>
                <div id="nameRu">Ruthenium</div>
                <div>101.072</div>
                <button type="button" id="btnRu" onclick="open_dialog('Ruthenium');">details.
                </button>
            </li>
            
            <li id="Rh" class="row5 col9 cat-transition_metal">
                <div>45</div>
                <div>Rh</div>
                <div id="nameRh">Rhodium</div>
                <div>102.905502</div>
                <button type="button" id="btnRh" onclick="open_dialog('Rhodium');">details.</button>
            </li>
            
            <li id="Pd" class="row5 col10 cat-transition_metal">
                <div>46</div>
                <div>Pd</div>
                <div id="namePd">Palladium</div>
                <div>106.421</div>
                <button type="button" id="btnPd" onclick="open_dialog('Palladium');">details.
                </button>
            </li>
            
            <li id="Ag" class="row5 col11 cat-transition_metal">
                <div>47</div>
                <div>Ag</div>
                <div id="nameAg">Silver</div>
                <div>107.86822</div>
                <button type="button" id="btnAg" onclick="open_dialog('Silver');">details.</button>
            </li>
            
            <li id="Cd" class="row5 col12 cat-transition_metal">
                <div>48</div>
                <div>Cd</div>
                <div id="nameCd">Cadmium</div>
                <div>112.4144</div>
                <button type="button" id="btnCd" onclick="open_dialog('Cadmium');">details.</button>
            </li>
            
            <li id="In" class="row5 col13 cat-post-transition_metal">
                <div>49</div>
                <div>In</div>
                <div id="nameIn">Indium</div>
                <div>114.8181</div>
                <button type="button" id="btnIn" onclick="open_dialog('Indium');">details.</button>
            </li>
            
            <li id="Sn" class="row5 col14 cat-post-transition_metal">
                <div>50</div>
                <div>Sn</div>
                <div id="nameSn">Tin</div>
                <div>118.7107</div>
                <button type="button" id="btnSn" onclick="open_dialog('Tin');">details.</button>
            </li>
            
            <li id="Sb" class="row5 col15 cat-metalloid">
                <div>51</div>
                <div>Sb</div>
                <div id="nameSb">Antimony</div>
                <div>121.7601</div>
                <button type="button" id="btnSb" onclick="open_dialog('Antimony');">details.
                </button>
            </li>
            
            <li id="Te" class="row5 col16 cat-metalloid">
                <div>52</div>
                <div>Te</div>
                <div id="nameTe">Tellurium</div>
                <div>127.603</div>
                <button type="button" id="btnTe" onclick="open_dialog('Tellurium');">details.
                </button>
            </li>
            
            <li id="I" class="row5 col17 cat-diatomic_nonmetal">
                <div>53</div>
                <div>I</div>
                <div id="nameI">Iodine</div>
                <div>126.904473</div>
                <button type="button" id="btnI" onclick="open_dialog('Iodine');">details.</button>
            </li>
            
            <li id="Xe" class="row5 col18 cat-noble_gas">
                <div>54</div>
                <div>Xe</div>
                <div id="nameXe">Xenon</div>
                <div>131.2936</div>
                <button type="button" id="btnXe" onclick="open_dialog('Xenon');">details.</button>
            </li>
            
            <li id="Cs" class="row6 col1 cat-alkali_metal">
                <div>55</div>
                <div>Cs</div>
                <div id="nameCs">Cesium</div>
                <div>132.905451966</div>
                <button type="button" id="btnCs" onclick="open_dialog('Cesium');">details.</button>
            </li>
            
            <li id="Ba" class="row6 col2 cat-alkaline_earth_metal">
                <div>56</div>
                <div>Ba</div>
                <div id="nameBa">Barium</div>
                <div>137.3277</div>
                <button type="button" id="btnBa" onclick="open_dialog('Barium');">details.</button>
            </li>
            
            <li id="La" class="row9 col3 cat-lanthanide">
                <div>57</div>
                <div>La</div>
                <div id="nameLa">Lanthanum</div>
                <div>138.905477</div>
                <button type="button" id="btnLa" onclick="open_dialog('Lanthanum');">details.
                </button>
            </li>
            
            <li id="Ce" class="row9 col4 cat-lanthanide">
                <div>58</div>
                <div>Ce</div>
                <div id="nameCe">Cerium</div>
                <div>140.1161</div>
                <button type="button" id="btnCe" onclick="open_dialog('Cerium');">details.</button>
            </li>
            
            <li id="Pr" class="row9 col5 cat-lanthanide">
                <div>59</div>
                <div>Pr</div>
                <div id="namePr">Praseodymium</div>
                <div>140.907662</div>
                <button type="button" id="btnPr" onclick="open_dialog('Praseodymium');">details.
                </button>
            </li>
            
            <li id="Nd" class="row9 col6 cat-lanthanide">
                <div>60</div>
                <div>Nd</div>
                <div id="nameNd">Neodymium</div>
                <div>144.2423</div>
                <button type="button" id="btnNd" onclick="open_dialog('Neodymium');">details.
                </button>
            </li>
            
            <li id="Pm" class="row9 col7 cat-lanthanide">
                <div>61</div>
                <div>Pm</div>
                <div id="namePm">Promethium</div>
                <div>145</div>
                <button type="button" id="btnPm" onclick="open_dialog('Promethium');">details.
                </button>
            </li>
            
            <li id="Sm" class="row9 col8 cat-lanthanide">
                <div>62</div>
                <div>Sm</div>
                <div id="nameSm">Samarium</div>
                <div>150.362</div>
                <button type="button" id="btnSm" onclick="open_dialog('Samarium');">details.
                </button>
            </li>
            
            <li id="Eu" class="row9 col9 cat-lanthanide">
                <div>63</div>
                <div>Eu</div>
                <div id="nameEu">Europium</div>
                <div>151.9641</div>
                <button type="button" id="btnEu" onclick="open_dialog('Europium');">details.
                </button>
            </li>
            
            <li id="Gd" class="row9 col10 cat-lanthanide">
                <div>64</div>
                <div>Gd</div>
                <div id="nameGd">Gadolinium</div>
                <div>157.253</div>
                <button type="button" id="btnGd" onclick="open_dialog('Gadolinium');">details.
                </button>
            </li>
            
            <li id="Tb" class="row9 col11 cat-lanthanide">
                <div>65</div>
                <div>Tb</div>
                <div id="nameTb">Terbium</div>
                <div>158.925352</div>
                <button type="button" id="btnTb" onclick="open_dialog('Terbium');">details.</button>
            </li>
            
            <li id="Dy" class="row9 col12 cat-lanthanide">
                <div>66</div>
                <div>Dy</div>
                <div id="nameDy">Dysprosium</div>
                <div>162.5001</div>
                <button type="button" id="btnDy" onclick="open_dialog('Dysprosium');">details.
                </button>
            </li>
            
            <li id="Ho" class="row9 col13 cat-lanthanide">
                <div>67</div>
                <div>Ho</div>
                <div id="nameHo">Holmium</div>
                <div>164.930332</div>
                <button type="button" id="btnHo" onclick="open_dialog('Holmium');">details.</button>
            </li>
            
            <li id="Er" class="row9 col14 cat-lanthanide">
                <div>68</div>
                <div>Er</div>
                <div id="nameEr">Erbium</div>
                <div>167.2593</div>
                <button type="button" id="btnEr" onclick="open_dialog('Erbium');">details.</button>
            </li>
            
            <li id="Tm" class="row9 col15 cat-lanthanide">
                <div>69</div>
                <div>Tm</div>
                <div id="nameTm">Thulium</div>
                <div>168.934222</div>
                <button type="button" id="btnTm" onclick="open_dialog('Thulium');">details.</button>
            </li>
            
            <li id="Yb" class="row9 col16 cat-lanthanide">
                <div>70</div>
                <div>Yb</div>
                <div id="nameYb">Ytterbium</div>
                <div>173.0451</div>
                <button type="button" id="btnYb" onclick="open_dialog('Ytterbium');">details.
                </button>
            </li>
            
            <li id="Lu" class="row9 col17 cat-lanthanide">
                <div>71</div>
                <div>Lu</div>
                <div id="nameLu">Lutetium</div>
                <div>174.96681</div>
                <button type="button" id="btnLu" onclick="open_dialog('Lutetium');">details.
                </button>
            </li>
            
            <li id="Hf" class="row6 col4 cat-transition_metal">
                <div>72</div>
                <div>Hf</div>
                <div id="nameHf">Hafnium</div>
                <div>178.492</div>
                <button type="button" id="btnHf" onclick="open_dialog('Hafnium');">details.</button>
            </li>
            
            <li id="Ta" class="row6 col5 cat-transition_metal">
                <div>73</div>
                <div>Ta</div>
                <div id="nameTa">Tantalum</div>
                <div>180.947882</div>
                <button type="button" id="btnTa"onclick="open_dialog('Tantalum');">details.
                </button>
            </li>
            
            <li id="W" class="row6 col6 cat-transition_metal">
                <div>74</div>
                <div>W</div>
                <div id="nameW">Tungsten</div>
                <div>183.841</div>
                <button type="button" id="btnW" onclick="open_dialog('Tungsten');">details.
                </button>
            </li>
            
            <li id="Re" class="row6 col7 cat-transition_metal">
                <div>75</div>
                <div>Re</div>
                <div id="nameRe">Rhenium</div>
                <div>186.2071</div>
                <button type="button" id="btnRe" onclick="open_dialog('Rhenium');">details.
                </button>
            </li>
            
            <li id="Os" class="row6 col8 cat-transition_metal">
                <div>76</div>
                <div>Os</div>
                <div id="nameOs">Osmium</div>
                <div>190.233</div>
                <button type="button" id="btnOs" onclick="open_dialog('Osmium');">details.
                </button>
            </li>
            
            <li id="Ir" class="row6 col9 cat-transition_metal">
                <div>77</div>
                <div>Ir</div>
                <div id="nameIr">Iridium</div>
                <div>192.2173</div>
                <button type="button" id="btnIr" onclick="open_dialog('Iridium');">details.
                </button>
            </li>
            
            <li id="Pt" class="row6 col10 cat-transition_metal">
                <div>78</div>
                <div>Pt</div>
                <div id="namePt">Platinum</div>
                <div>195.0849</div>
                <button type="button" id="btnPt" onclick="open_dialog('Platinum');">details.
                </button>
            </li>
            
            <li id="Au" class="row6 col11 cat-transition_metal">
                <div>79</div>
                <div>Au</div>
                <div id="nameAu">Gold</div>
                <div>196.9665695</div>
                <button type="button" id="btnAu" onclick="open_dialog('Gold');">details.
                </button>
            </li>
            
            <li id="Hg" class="row6 col12 cat-transition_metal">
                <div>80</div>
                <div>Hg</div>
                <div id="nameHg">Mercury</div>
                <div>200.5923</div>
                <button type="button" id="btnHg" onclick="open_dialog('Mercury');">details.
                </button>
            </li>
            
            <li id="Tl" class="row6 col13 cat-post-transition_metal">
                <div>81</div>
                <div>Tl</div>
                <div id="nameTl">Thallium</div>
                <div>204.38</div>
                <button type="button" id="btnTl" onclick="open_dialog('Thallium');">details.
                </button>
            </li>
            
            <li id="Pb" class="row6 col14 cat-post-transition_metal">
                <div>82</div>
                <div>Pb</div>
                <div id="namePb">Lead</div>
                <div>207.21</div>
                <button type="button" id="btnPb" onclick="open_dialog('Lead');">details.
                </button>
            </li>
            
            <li id="Bi" class="row6 col15 cat-post-transition_metal">
                <div>83</div>
                <div>Bi</div>
                <div id="nameBi">Bismuth</div>
                <div>208.980401</div>
                <button type="button" id="btnBi" onclick="open_dialog('Bismuth');">details.
                </button>
            </li>
            
            <li id="Po" class="row6 col16 cat-post-transition_metal">
                <div>84</div>
                <div>Po</div>
                <div id="namePo">Polonium</div>
                <div>209</div>
                <button type="button" id="btnPo" onclick="open_dialog('Polonium');">details.
                </button>
            </li>
            
            <li id="At" class="row6 col17 cat-metalloid">
                <div>85</div>
                <div>At</div>
                <div id="nameAt">Astatine</div>
                <div>210</div>
                <button type="button" id="btnAt" onclick="open_dialog('Astatine');">details.
                </button>
            </li>
            
            <li id="Rn" class="row6 col18 cat-noble_gas">
                <div>86</div>
                <div>Rn</div>
                <div id="nameRn">Radon</div>
                <div>222</div>
                <button type="button" id="btnRn" onclick="open_dialog('Radon');">details.
                </button>
            </li>
            
            <li id="Fr" class="row7 col1 cat-alkali_metal">
                <div>87</div>
                <div>Fr</div>
                <div id="nameFr">Francium</div>
                <div>223</div>
                <button type="button" id="btnFr" onclick="open_dialog('Francium');">details.
                </button>
            </li>
            
            <li id="Ra" class="row7 col2 cat-alkaline_earth_metal">
                <div>88</div>
                <div>Ra</div>
                <div id="nameRa">Radium</div>
                <div>226</div>
                <button type="button" id="btnRa" onclick="open_dialog('Radium');">details.
                </button>
            </li>
            
            <li id="Ac" class="row10 col3 cat-actinide">
                <div>89</div>
                <div>Ac</div>
                <div id="nameAc">Actinium</div>
                <div>227</div>
                <button type="button" id="btnAc" onclick="open_dialog('Actinium');">details.
                </button>
            </li>
            
            <li id="Th" class="row10 col4 cat-actinide">
                <div>90</div>
                <div>Th</div>
                <div id="nameTh">Thorium</div>
                <div>232.03774</div>
                <button type="button" id="btnTh" onclick="open_dialog('Thorium');">details.
                </button>
            </li>
            
            <li id="Pa" class="row10 col5 cat-actinide">
                <div>91</div>
                <div>Pa</div>
                <div id="namePa">Protactinium</div>
                <div>231.035882</div>
                <button type="button" id="btnPa" onclick="open_dialog('Protactinium');">details.
                </button>
            </li>
            
            <li id="U" class="row10 col6 cat-actinide">
                <div>92</div>
                <div>U</div>
                <div id="nameU">Uranium</div>
                <div>238.028913</div>
                <button type="button" id="btnU" onclick="open_dialog('Uranium');">details.
                </button>
            </li>
            
            <li id="Np" class="row10 col7 cat-actinide">
                <div>93</div>
                <div>Np</div>
                <div id="nameNp">Neptunium</div>
                <div>237</div>
                <button type="button" id="btnNp" onclick="open_dialog('Neptunium');">details.
                </button>
            </li>
            
            <li id="Pu" class="row10 col8 cat-actinide">
                <div>94</div>
                <div>Pu</div>
                <div id="namePu">Plutonium</div>
                <div>244</div>
                <button type="button" id="btnPu" onclick="open_dialog('Plutonium');">details.
                </button>
            </li>
            
            <li id="Am" class="row10 col9 cat-actinide">
                <div>95</div>
                <div>Am</div>
                <div id="nameAm">Americium</div>
                <div>243</div>
                <button type="button" id="btnAm" onclick="open_dialog('Americium');">details.
                </button>
            </li>
            
            <li id="Cm" class="row10 col10 cat-actinide">
                <div>96</div>
                <div>Cm</div>
                <div id="nameCm">Curium</div>
                <div>247</div>
                <button type="button" id="btnCm" onclick="open_dialog('Curium');">details.
                </button>
            </li>
            
            <li id="Bk" class="row10 col11 cat-actinide">
                <div>97</div>
                <div>Bk</div>
                <div id="nameBk">Berkelium</div>
                <div>247</div>
                <button type="button" id="btnBk" onclick="open_dialog('Berkelium');">details.
                </button>
            </li>
            
            <li id="Cf" class="row10 col12 cat-actinide">
                <div>98</div>
                <div>Cf</div>
                <div id="nameCf">Californium</div>
                <div>251</div>
                <button type="button" id="btnCf" onclick="open_dialog('Californium');">details.
                </button>
            </li>
            
            <li id="Es" class="row10 col13 cat-actinide">
                <div>99</div>
                <div>Es</div>
                <div id="nameEs">Einsteinium</div>
                <div>252</div>
                <button type="button" id="btnEs" onclick="open_dialog('Einsteinium');">details.
                </button>
            </li>
            
            <li id="Fm" class="row10 col14 cat-actinide">
                <div>100</div>
                <div>Fm</div>
                <div id="nameFm">Fermium</div>
                <div>257</div>
                <button type="button" id="btnFm" onclick="open_dialog('Fermium');">details.
                </button>
            </li>
            
            <li id="Md" class="row10 col15 cat-actinide">
                <div>101</div>
                <div>Md</div>
                <div id="nameMd">Mendelevium</div>
                <div>258</div>
                <button type="button" id="btnMd" onclick="open_dialog('Mendelevium');">details.
                </button>
            </li>
            
            <li id="No" class="row10 col16 cat-actinide">
                <div>102</div>
                <div>No</div>
                <div id="nameNo">Nobelium</div>
                <div>259</div>
                <button type="button" id="btnNo" onclick="open_dialog('Nobelium');">details.
                </button>
            </li>
            
            <li id="Lr" class="row10 col17 cat-actinide">
                <div>103</div>
                <div>Lr</div>
                <div id="nameLr">Lawrencium</div>
                <div>266</div>
                <button type="button" id="btnLr" onclick="open_dialog('Lawrencium');">details.
                </button>
            </li>
            
            <li id="Rf" class="row7 col4 cat-transition_metal">
                <div>104</div>
                <div>Rf</div>
                <div id="nameRf">Rutherfordium</div>
                <div>267</div>
                <button type="button" id="btnRf" onclick="open_dialog('Rutherfordium');">details.
                </button>
            </li>
            
            <li id="Db" class="row7 col5 cat-transition_metal">
                <div>105</div>
                <div>Db</div>
                <div id="nameDb">Dubnium</div>
                <div>268</div>
                <button type="button" id="btnDb" onclick="open_dialog('Dubnium');">details.
                </button>
            </li>
            
            <li id="Sg" class="row7 col6 cat-transition_metal">
                <div>106</div>
                <div>Sg</div>
                <div id="nameSg">Seaborgium</div>
                <div>269</div>
                <button type="button" id="btnSg" onclick="open_dialog('Seaborgium');">details.
                </button>
            </li>
            
            <li id="Bh" class="row7 col7 cat-transition_metal">
                <div>107</div>
                <div>Bh</div>
                <div id="nameBh">Bohrium</div>
                <div>270</div>
                <button type="button" id="btnBh" onclick="open_dialog('Bohrium');">details.
                </button>
            </li>
            
            <li id="Hs" class="row7 col8 cat-transition_metal">
                <div>108</div>
                <div>Hs</div>
                <div id="nameHs">Hassium</div>
                <div>269</div>
                <button type="button" id="btnHs" onclick="open_dialog('Hassium');">details.
                </button>
            </li>
            
            <li id="Mt" class="row7 col9 cat-unknown_probably_transition_metal">
                <div>109</div>
                <div>Mt</div>
                <div id="nameMt">Meitnerium</div>
                <div>278</div>
                <button type="button" id="btnMt" onclick="open_dialog('Meitnerium');">details.
                </button>
            </li>
            
            <li id="Ds" class="row7 col10 cat-unknown_probably_transition_metal">
                <div>110</div>
                <div>Ds</div>
                <div id="nameDs">Darmstadtium</div>
                <div>281</div>
                <button type="button" id="btnDs" onclick="open_dialog('Darmstadtium');">details.
                </button>
            </li>
            
            <li id="Rg" class="row7 col11 cat-unknown_probably_transition_metal">
                <div>111</div>
                <div>Rg</div>
                <div id="nameRg">Roentgenium</div>
                <div>282</div>
                <button type="button" id="btnRg" onclick="open_dialog('Roentgenium');">details.
                </button>
            </li>
            
            <li id="Cn" class="row7 col12 cat-transition_metal">
                <div>112</div>
                <div>Cn</div>
                <div id="nameCn">Copernicium</div>
                <div>285</div>
                <button type="button" id="btnCn" onclick="open_dialog('Copernicium');">details.
                </button>
            </li>
            
            <li id="Nh" class="row7 col13 cat-unknown_probably_transition_metal">
                <div>113</div>
                <div>Nh</div>
                <div id="nameNh">Nihonium</div>
                <div>286</div>
                <button type="button" id="btnNh" onclick="open_dialog('Nihonium');">details.
                </button>
            </li>
            
            <li id="Fl" class="row7 col14 cat-post-transition_metal">
                <div>114</div>
                <div>Fl</div>
                <div id="nameFl">Flerovium</div>
                <div>289</div>
                <button type="button" id="btnFl" onclick="open_dialog('Flerovium');">details.
                </button>
            </li>
            
            <li id="Mc" class="row7 col15 cat-unknown_probably_post-transition_metal">
                <div>115</div>
                <div>Mc</div>
                <div id="nameMc">Moscovium</div>
                <div>289</div>
                <button type="button" id="btnMc" onclick="open_dialog('Moscovium');">details.
                </button>
            </li>
            
            <li id="Lv" class="row7 col16 cat-unknown_probably_post-transition_metal">
                <div>116</div>
                <div>Lv</div>
                <div id="nameLv">Livermorium</div>
                <div>293</div>
                <button type="button" id="btnLv" onclick="open_dialog('Livermorium');">details.
                </button>
            </li>
            <li id="Ts" class="row7 col17 cat-unknown_probably_metalloid">
                <div>117</div>
                <div>Ts</div>
                <div id="nameTs">Tennessine</div>
                <div>294</div>
                <button type="button" id="btnTs" onclick="open_dialog('Tennessine');">details.
                </button>
            </li>
            
            <li id="Og" class="row7 col18 cat-unknown_predicted_to_be_noble_gas">
                <div>118</div>
                <div>Og</div>
                <div id="nameOg">Oganesson</div>
                <div>294</div>
                <button type="button" id="btnOg" onclick="open_dialog('Oganesson');">details.
                </button>
            </li>
            
            <li id="Uue" class="row8 col1 cat-unknown_but_predicted_to_be_an_alkali_metal">
                <div>119</div>
                <div>Uue</div>
                <div id="nameUue">Ununennium</div>
                <div>315</div>
                <button type="button" id="btnUue" onclick="open_dialog('Ununennium');">details.
                </button>
            </li>
        </ol>
        </div>
    </React.Fragment>
  );
}