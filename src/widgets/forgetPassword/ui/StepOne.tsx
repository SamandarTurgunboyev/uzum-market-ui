import { authForgetPassword } from '@/shared/config/api/authApi';
import { getAllCountry } from '@/shared/config/api/countries';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Check, ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { forgetPasswordValidations } from '../lib/validation';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepOne = ({ setStep, step }: Props) => {
  const { data: country, isLoading } = useQuery({
    queryKey: ['country'],
    queryFn: getAllCountry,
  });
  const { setPhone } = usePhoneNumber();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const forgetpasswordForm = useForm<z.infer<typeof forgetPasswordValidations>>(
    {
      resolver: zodResolver(forgetPasswordValidations),
      defaultValues: {
        phone: '',
      },
    },
  );

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof forgetPasswordValidations>) => {
      return authForgetPassword({ ...body });
    },
    onSuccess: () => {
      setStep(step + 1);
      toast.success('Tasdiqlash kodi yuborildi');
    },
    onError: () => {
      toast.error('Xatolik yuz berdi');
    },
  });

  function onSubmit(values: z.infer<typeof forgetPasswordValidations>) {
    if (!value) {
      toast.error('Telefon kodi tanlanmagan');
    }

    const payload = {
      phone: value + values.phone,
    };

    setPhone(payload.phone);
    mutate(payload);
  }

  return (
    <div>
      {step === 0 && (
        <Form {...forgetpasswordForm}>
          <form
            onSubmit={forgetpasswordForm.handleSubmit(onSubmit)}
            className="grid gap-y-4"
          >
            <FormField
              key="phone"
              control={forgetpasswordForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label>Phone</Label>
                  <FormControl>
                    <div className="flex gap-2">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[100px] justify-between"
                            disabled={isLoading || isPending}
                          >
                            {value ? (
                              <>
                                <Image
                                  src={`https://flagcdn.com/16x12/${country?.data
                                    .find(
                                      (framework) =>
                                        framework.phonecode === value,
                                    )
                                    ?.isoCode.toLowerCase()}.png`}
                                  alt="flag"
                                />
                                {
                                  country?.data.find(
                                    (framework) =>
                                      framework.phonecode === value,
                                  )?.phonecode
                                }
                              </>
                            ) : (
                              'Code'
                            )}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] h-[250px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search Code..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No Code found.</CommandEmpty>
                              <CommandGroup>
                                {country?.data.map((framework) => (
                                  <CommandItem
                                    key={framework.phonecode}
                                    value={framework.phonecode}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ''
                                          : currentValue,
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    <Image
                                      src={`https://flagcdn.com/16x12/${framework.isoCode.toLowerCase()}.png`}
                                      alt={framework.name}
                                    />
                                    {framework.phonecode}
                                    <Check
                                      className={cn(
                                        'ml-auto',
                                        value === framework.phonecode
                                          ? 'opacity-100'
                                          : 'opacity-0',
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <Input
                        placeholder="Telefon raqami"
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        disabled={isPending}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="button"
                className="font-medium"
                size="sm"
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
              >
                Back
              </Button>
              <Button
                type="submit"
                size="sm"
                className="font-medium"
                disabled={isPending}
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default StepOne;
