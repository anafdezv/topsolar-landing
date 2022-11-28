import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { QuoteDataProps, StepEnum } from '@/components/form'
import { StepAdress } from '@/components/form/steps/StepAdress';
import { StepDetails } from '@/components/form/steps/StepDetails';
import { StepPlacement } from '@/components/form/steps/StepPlacement'
import { StepPower } from '@/components/form/steps/StepPower';
import { StepSeason } from '@/components/form/steps/StepSeason';
import { StepFinish } from './steps/StepFinish';
import { StepHorary } from '@/components/form/steps/StepHorary';


export const FormQuote = () => {

    const router = useRouter()
    const [data, setData] = useState<QuoteDataProps>({
        placement: undefined,
        homeAdress: undefined,
        horary: undefined,
        season: undefined,
        powerContracted: undefined,
        fullName: undefined,
        phoneNumber: undefined,
        email: undefined,
        acceptPrivacy: undefined,
    });


    const [step, setStep] = useState<StepEnum>(StepEnum.PLACEMENT);

    return (
        <span className="w-full h-full flex items-center justify-center">
            <form className="w-full px-12 max-w-4xl h-full flex flex-col  items-center md:gap-24 justify-between md:justify-center py-24">
                {
                    step === StepEnum.PLACEMENT && <StepPlacement
                        data={data}
                        setData={setData}
                        onNext={() => setStep(StepEnum.ADRESS)}
                    />
                }
                {
                    step === StepEnum.ADRESS && <StepAdress
                        data={data}
                        setData={setData}
                        onNext={() => setStep(StepEnum.HORARY)}
                        onBack={() => setStep(StepEnum.PLACEMENT)} />
                }
                {step === StepEnum.HORARY && <StepHorary
                    data={data}
                    setData={setData}
                    onNext={() => setStep(StepEnum.SEASON)}
                    onBack={() => setStep(StepEnum.ADRESS)}

                />}
                {step === StepEnum.SEASON && <StepSeason
                    data={data}
                    setData={setData}
                    onNext={() => setStep(StepEnum.POWER)}
                    onBack={() => setStep(StepEnum.HORARY)}

                />}
                {step === StepEnum.POWER && <StepPower
                    data={data}
                    setData={setData}
                    onNext={() => setStep(StepEnum.DETAILS)}
                    onBack={() => setStep(StepEnum.SEASON)}

                />}
                {step === StepEnum.DETAILS && <StepDetails
                    data={data}
                    setData={setData}
                    onNext={() => setStep(StepEnum.FINISH)}
                    onBack={() => setStep(StepEnum.POWER)}

                />}
                {step === StepEnum.FINISH && <StepFinish />}
            </form>
        </span>
    )
}
