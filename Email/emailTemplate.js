export const template = (token) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <style>
            /* Your existing styles here... */
            .btn { background:#4e8991; text-align:center; }
            .btn a { border: 1px solid #4e8991; color: #ffffff; padding: 10px 31px; text-decoration: none; display: block; font-weight: bold; }
        </style>
    </head>
    <body style="background-color: #F2F2F2; padding: 20px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background: #fcf5ef;">
            <tr>
                <td style="padding: 40px; text-align: center;">
                    <h2>Confirm Your Registration</h2>
                    <p>Click the button below to verify your account and start using Note App.</p>
                    <table align="center" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="btn">
                                <a href="http://localhost:3000/verify/${token}">Verify Email</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`;
}