import React from "react";

export const validUsername = new RegExp('^[a-zA-Z0-9].{6,20}$');
export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');