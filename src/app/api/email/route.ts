import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { nome, email, assunto, mensagem } = await request.json();

  if (!nome || !email || !assunto || !mensagem) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Mensagem de ${nome} (${email})`,
    html: `
        <center style="max-width:700px;width:100%;table-layout:fixed;padding-bottom:60px;margin:0 auto">
            <table style="background-color:#234b64;width:100%;border-spacing:0">
                <tbody>
                    <tr style="background-color:#234b64">
                        <td style="padding:0">
                            <table style="border-spacing:0;width:100%">
                                <tbody>
                                    <tr>
                                        <td style="text-align:center">
                                            <p>
                                                <a href="https://repense.ong.br/" style="margin:0 auto" target="_blank" >
                                                    <img src="https://teste-2-git-main-kiqvs-projects.vercel.app/assets/icons/repenseLogo.svg" alt="Logo Repense" title="Repense" width="224">
                                                </a>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style="max-width:580px;width:100%;background-color:#fff;margin:0 auto;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#171a1b;border-spacing:0">
                <tbody>
                    <tr>
                        <td style="padding:0">
                            <table style="border-spacing:0;width:100%">
                                <tbody>
                                    <tr>
                                        <td style="padding:0">
                                            <h2 style="color:#000;text-align:center;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:1.5rem;font-style:normal;font-weight:500;line-height:normal;margin:22px 0 32px">Fale Conosco</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0">
                            <table style="border-spacing:0;width:100%">
                                <tbody>
                                    <tr>
                                        <td style="padding:0">
                                            <p style="margin:0 0 8px;color:#000;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:17px;font-style:normal;font-weight:400;line-height:normal">Nome: ${nome}</p>
                                            <p style="margin:8px 0;color:#000;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:17px;font-style:normal;font-weight:400;line-height:normal">E-mail: <a href="mailto:${email}" target="_blank">${email}</a></p>
                                            <p style="margin:8px 0;color:#000;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:17px;font-style:normal;font-weight:400;line-height:normal">Assunto: ${assunto}</p>
                                            <p style="margin:32px 0 8px;color:#000;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:17px;font-style:normal;font-weight:400;line-height:normal">Mensagem:</p>
                                            <div style="max-width:510px;width:100%;height:auto;border-radius:2px;border:1px solid rgba(0,0,0,0.07);background:#fff;margin:0 auto;margin-bottom:23px;padding:16px 16px">
                                                <p style="color:#404040;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;font-style:italic;font-weight:400;line-height:normal;margin:0">${mensagem}</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0">
                            <table style="border-spacing:0;width:100%">
                                <tbody><tr>
                                    <td style="padding:0">
                                        <p style="color:#7d7d7d;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-style:normal;font-weight:400;line-height:normal;margin-top:23px">Mensagem recebida pelo formulario “Contato” enviada pelo site Repense <a href="https://repense.ong.br/" target="_blank">repense.ong.br/</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </center> 
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email enviado com sucesso' });
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao enviar o email', details: err }, { status: 500 });
  }
}
