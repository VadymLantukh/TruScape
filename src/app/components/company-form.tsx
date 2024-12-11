'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import LogoUploader from './logo-uploader';
import InputField from './input-field';
import Button from './button';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
  onSubmit: () => void;
};

const CompanyForm = ({
  onSubmit,
}: {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFieldValues>({
    defaultValues: {
      name: '',
      status: '',
      country: '',
      category: '',
      date: '',
      description: '',
    },
  });

  const handleFormSubmit: SubmitHandler<CompanyFieldValues> = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-10"
    >
      <p className="mb-0.5 text-xl">Add new company</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col flex-1 gap-5">
          <LogoUploader label="Logo" placeholder="Upload photo" />
          <InputField
            label="Status"
            placeholder="Status"
            {...register('status', { required: 'Status is required' })}
          />
          {errors.status && (
            <p className="text-red-500">{errors.status.message}</p>
          )}
          <InputField
            label="Country"
            placeholder="Country"
            {...register('country', { required: 'Country is required' })}
          />
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <InputField
            label="Name"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <InputField
            label="Category"
            placeholder="Category"
            {...register('category', { required: 'Category is required' })}
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
          <InputField
            label="Joined date"
            type="date"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
          <InputField
            label="Description"
            placeholder="Description"
            {...register('description', {
              required: 'Description is required',
            })}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
      </div>
      <Button type="submit">Add company</Button>
    </form>
  );
};

export default CompanyForm;
