﻿namespace PL.MVC.Infrastructure.Requests
{
    public class UpdateProfileRequest
    {
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email {  get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
    }
}