/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    isAuthenticated: boolean;
    email?: string;
    userId?: string;
  }
}