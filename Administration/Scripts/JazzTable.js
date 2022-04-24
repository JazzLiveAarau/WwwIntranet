// File: JazzControls.js
// Date: 2022-04-24
// Author: Gunnar Lidén

// Inhalt
// ======
//
// Class for the creation of a table
//
// Reference: https://www.w3schools.com/js/js_classes.asp

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Table /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class that creates a table
class JazzTable
{
    // Function that is executed when an object of this class is created
    constructor(i_id_text_box, i_id_div_container, i_n_columns, i_class) 
    {
        // Member variables
        // ================

        // The identity of the table
        this.m_id_text_box = i_id_text_box;

        // The identity of the container for the table
        this.m_id_div_container = i_id_div_container;

        // Number of columns
        this.m_n_columns = i_n_columns;

        // Style class for the table
        this.m_class = i_class;

        // The container element for the table
        this.m_el_div_container = null;

        // All rows of the table
        this.m_all_rows = [];

        // Initialization

        this.setDivContainerElement();

        this.addInitTable();

    } // constructor

    appendRow(i_t_value_array)
    {
        var n_array = i_t_value_array.length;

        if (n_array != this.m_n_columns)
        {
            alert("JazzTable.appendRow n_array" + n_array.toString() + " not equal m_n_columns= " +  this.m_n_columns.toString());

            return;
        }

        var column_array = [];

        for (var index_t=0; index_t < n_array; index_t++)
        {
            var el_column = null;

            if (this.m_all_rows.length > 0)
            {
                el_column = this.createElementTableRowTd(i_t_value_array[index_t]);
            }
            else
            {
                el_column = this.createElementTableRowTh(i_t_value_array[index_t]);
            }

            column_array[index_t] = el_column;
        }

        var append_row = this.createElementRow(column_array);

        this.m_all_rows[this.m_all_rows.length] = append_row;

        var el_table = this.createElementTable(this.m_all_rows);

        if (this.m_class.length > 0)
        {
            el_table.classList.add(this.m_class);
        }

        var el_div_table = this.getDivContainerElement();

        el_div_table.innerHTML = "";

        el_div_table.appendChild(el_table);

    } // appendRow

    initTable()
    {
        this.m_all_rows = [];
        
    } // initTable

    // Create functions
    // ================

    addInitTable()
    {
        var el_div_table = this.getDivContainerElement();

        var el_header_array = [];

        for (var index_th=0; index_th < this.m_n_columns; index_th++)
        {
            var inner_html = 'Header Column ' + (index_th + 1).toString();

            el_header_array[index_th] = this.createElementTableRowTh(inner_html);
        }

        var el_rows = [];

        el_rows[0] = this.createElementRow(el_header_array);

        var el_table = this.createElementTable(el_rows);

        if (this.m_class.length > 0)
        {
            el_table.classList.add(this.m_class);
        }

        el_div_table.appendChild(el_table);

    } // addInitTable

    createElementTable(i_row_array)
    {
        var el_table = document.createElement('table');

        for (var index_r=0; index_r < i_row_array.length; index_r++)
        {
            el_table.appendChild(i_row_array[index_r]);
        }

        return el_table;

    } // createElementTable

    createElementRow(i_column_array)
    {
        var el_row = document.createElement('tr');

        for (var index_t=0; index_t < i_column_array.length; index_t++)
        {
            el_row.appendChild(i_column_array[index_t]);
        }

        return el_row;

    } // createElementRow

    createElementTableRowTh(i_inner_html)
    {
        var ret_el_th = document.createElement('th');

        ret_el_th.innerHTML = i_inner_html;

        return ret_el_th;

    } // createElementTableRowTh

    createElementTableRowTd(i_inner_html)
    {
        var ret_el_t = document.createElement('td');

        ret_el_t.innerHTML = i_inner_html;

        return ret_el_t;

    } // createElementTableRowT

    // Utility functions
    // =================

    // Sets the div element container
    setDivContainerElement()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

    } // setDivContainerElement

    // Gets the div element container
    getDivContainerElement()
    {
        return this.m_el_div_container;

    } // setDivContainerElement

    clearSupporterTable()
    {
        var el_div_table = this.getDivContainerElement();

        el_div_table.innerHTML = "";

    } // clearSupporterTable

    // Returns true if input string is a number
    static isNumber(i_number_str)
    {
        var ret_bool = true;

        var number_str = i_number_str.trim();

        if (number_str.length == 0)
        {
            return false;
        }

        for (var index_str=0; index_str < number_str.length; index_str++)
        {
            var current_char = number_str.substring(index_str, index_str + 1);

            if (current_char == '0' || current_char == '1' || current_char == '2' || current_char == '3' || current_char == '4' || 
                current_char == '5' || current_char == '6' || current_char == '7' || current_char == '8' || current_char == '9'   )
            {
                ret_bool = true;
            }
            else
            {
                ret_bool = false;

                break;
            }

            if (index_str == 0 && current_char == '0' )
            {
                ret_bool = false;

                break;
            }

        }

        return ret_bool;

    } // isNumber


} // JazzTable

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Table ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////