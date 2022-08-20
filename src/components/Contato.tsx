import Logo from 'assets/dani_512_512.png';
import React, { useState, ReactElement } from 'react';

type Message = {
  email?: string;
  name?: string;
  message?: string;
};

export function Contato(): ReactElement {
  const [message, setMessage] = useState<Message>({ email: '', name: '', message: '' });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setMessage({ ...message, [event.target.name]: event.currentTarget.value });
  }

  const canSendMessage = (): boolean => {
    return message?.email !== '' && message?.message !== '' && message?.name !== '';
  };

  const sendMessage = (): void => {
    if (!canSendMessage()) {
      alert('Complete os campos');
    } else {
      alert(`Mensagem enviada ${message?.message}`);
      setMessage({ email: '', name: '', message: '' });
    }
  };

  return (
    <article className="flex justify-center flex-col lg:flex-row ">
      <img src={Logo} alt="logo" />

      <div className="block p-6 rounded-lg shadow-lg bg-white w-full lg:w-1/2">
        <div>
          <div className="form-group mb-6">
            <input
              type="text"
              onChange={handleChange}
              value={message?.name}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
              id="exampleInput7"
              placeholder="Nome"
              name="name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              name="email"
              value={message?.email}
              onChange={handleChange}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
              id="exampleInput8"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              name="message"
              value={message?.message}
              onChange={handleChange}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows={10}
              placeholder="Mensagem"
            ></textarea>
          </div>
          {/* <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87"
              checked
              defaultChecked
            />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">
              Envie-me uma cópia desta mensagem
            </label>
          </div> */}
          <button
            type="button"
            onClick={sendMessage}
            disabled={!canSendMessage()}
            className="
      w-full
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      text-center
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-700 hover:shadow-lg
      focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      disabled:cursor-not-allowed
      transition
      duration-150
      ease-in-out"
          >
            Enviar
          </button>
        </div>
      </div>
    </article>
  );
}
