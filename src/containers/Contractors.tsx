import React, { Component } from 'react';
//Material-UI imports
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { StyledTextField, StyledAlert, StyledTextFieldMulti } from './Styles'

//Interfaces init
interface Invoice {
  id: number,
  address: string,
  date: string,
  amount: string,
  reason: string,
  paid: boolean,
}

interface Props {}

interface State {
  address: string,
  amount: string,
  date: string,
  message: string,
  reason: string,
}
//global var declaration
declare let window: any;
let invoicesArr: Invoice[] = [];
let invoiceId: number = 0;

class Contractors extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      address: '',
      amount: '',
      date: '',
      message: '',
      reason: '',
    };
  }
  //Invoices array update on localStorage
  updateInvoices = (): void => {
    const invoices: Invoice[] = JSON.parse(window.localStorage.getItem('invoices'));
    if(invoices == null) {
      invoicesArr = [];
    } else {
      invoicesArr = invoices;
      invoiceId = invoicesArr.length;
    }
  }

  //add an invoice to localStorage
  sendInvoice = (): void => {
    //we first update the array
    this.updateInvoices();
    //create a variable of type Invoice
    const invoice: Invoice = {
      id: invoiceId,
      address: this.state.address,
      date: this.state.date,
      amount: this.state.amount,
      reason: this.state.reason,
      paid: false,
    }
    //push the invoice to our array
    invoicesArr.push(invoice);
    //update localStorage
    window.localStorage.setItem('invoices', JSON.stringify(invoicesArr));
    //update our states
    this.setState({
      message: 'Invoice stored succesfully!',
      address: '',
      amount: '',
      date: '',
      reason: '',
    });
    //remove success message function (to add delay)
    const RemoveMessageWithDelay = (): void => {
      setTimeout((): void => {
         this.setState({ message: '' });
      }, 5000);
    }
    //call the function
    RemoveMessageWithDelay();
  }

  render() {
    return (
      <div>
        <Chip label="Contractors Portal" color="primary" />
        <hr />
          <h1><Chip label="Submit new invoice" variant="outlined" color="secondary" size="small" /></h1>
          <div>
            <div>
              <input
                type="date"
                value={this.state.date}
                onChange={event => this.setState({ date: event.target.value})}
              />
            </div>
            <div>
              <StyledTextField
                id="standard-basic"
                label="Enter eth deposit address:"
                placeholder="ex. 0x00F51D0e"
                value={this.state.address}
                onChange={event => this.setState({ address: event.target.value})}
                />
            </div>
            <div>
              <StyledTextField
                id="standard-basic"
                label="Invoice amount:"
                type="number"
                placeholder="amount in ether"
                value={this.state.amount}
                onChange={event => this.setState({ amount: event.target.value})}
                />
            </div>
            <div>
              <StyledTextFieldMulti
                id="standard-multiline-static"
                label="Reason:"
                multiline
                rows={4}
                variant="outlined"
                value={this.state.reason}
                onChange={event => this.setState({ reason: event.target.value})}
              />
            </div>
          </div>
          <div>
            <br></br>
            <Button variant="contained" color="primary" onClick={this.sendInvoice}>
              Submit
            </Button>
          </div>
        <br></br>
        <Box display="flex"
             alignItems="center"
             justifyContent="center">
          {this.state.message !== '' ? <StyledAlert severity="success">{this.state.message}</StyledAlert> : null}
        </Box>
      </div>
    );
  }
}

export default Contractors;
