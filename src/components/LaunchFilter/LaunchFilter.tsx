import React, { useMemo } from 'react'
import TextField from '@mui/material/TextField';
import { DateRange, DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Box, MenuItem, Select } from '@mui/material';
import { Pad } from '../../types/launch';

export interface FilterChanges {
    startDate: Date,
    endDate: Date,
    agency: string
}

interface LaunchFilterProps {
    pad?: Pad[]
    onFilterChange: (changes: FilterChanges) => void
}

export const LaunchFilter = ({pad, onFilterChange}: LaunchFilterProps) => {
  const [dateRangeValue, setDateRangeValue] = React.useState<DateRange<Date>>([null, null]);
  const [agencyValue, setAgencyValue] = React.useState<string>();

  const handleDateChange = (newDate: DateRange<Date>) => {
     setDateRangeValue(newDate);
      onFilterChange({
          startDate: newDate[0] || new Date(),
          endDate: newDate[1] || new Date(),
          agency: agencyValue || ''
      })
  }


  const handleAgencyChange = (newAgency: string) => {
      setAgencyValue(newAgency);
      onFilterChange({
        startDate: dateRangeValue[0] || new Date(),
        endDate: dateRangeValue[1] || new Date(),
        agency: agencyValue || ''
    })
  }

  const defaultValue = useMemo(() => pad?.[0]?.name, [pad])


    return (
        <Box display={'flex'} justifyContent="center" margin={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                startText="Check-in"
                endText="Check-out"
                value={dateRangeValue}
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                </React.Fragment>
                )}
            />
            </LocalizationProvider>
            <Box width="200px">
                <Select
                    fullWidth
                    value={agencyValue}
                    defaultValue={defaultValue}
                    label="Agencies"
                    onChange={(e) => handleAgencyChange(e.target.value)}
                >
                    {
                        pad?.map(({name}) => <MenuItem key={name} value={name}>{name}</MenuItem>)
                    }
                </Select>
            </Box>
        </Box>
      );
}
