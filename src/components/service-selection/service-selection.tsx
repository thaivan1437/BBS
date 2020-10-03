import React, { useState, useEffect, FC } from 'react';
// @ts-ignore
import { CONFIGS } from '@environment';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import { S } from './service-selection.styles';
import { CategoryItem, ProvidedService } from '../../types';

const ServiceSelection: FC<ServiceSelectionProps> = ({
  initialValue = [],
  onServiceSelected,
  serviceList = [],
  setErrors,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(null);
  const [selectedServicesIds, setSelectedServicesIds] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState(initialValue || []);
  const [selectedItems, setSelectedItems] = useState<ProvidedService>(null);

  const categories = serviceList.map((item) => item.category.name).sort();

  const sortedServiceList = [...serviceList];
  sortedServiceList.forEach((item, index) => {
    sortedServiceList[index].categoryItems = sortBy(item.categoryItems, [
      'name',
    ]);
  });

  useEffect(() => {
    const listItems = find(
      sortedServiceList,
      (item) => item.category.name === selectedCategory
    );
    setSelectedItems(listItems);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    setSelectedServicesIds(selectedServices.map((service) => service.id));

    onServiceSelected(selectedServices);
  }, [selectedServices]);

  return (
    <S.ServiceSelectionContainer>
      <S.ServiceCategoryContainer>
        {categories.map((category, index) => (
          <S.CategoryItem
            key={index}
            onClick={() => {
              setSelectedCategory(category);
            }}
            selected={selectedCategory === category}
          >
            <S.IconContainer
              src={
                selectedCategory === category
                  ? `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/radio_on.png`
                  : `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/radio_off.png`
              }
            />
            <div>{category}</div>
          </S.CategoryItem>
        ))}
      </S.ServiceCategoryContainer>
      <S.ServiceServicesContainer>
        {selectedItems &&
          selectedItems.categoryItems &&
          selectedItems.categoryItems.length > 0 &&
          selectedItems.categoryItems.map((service, index) => (
            <S.ServiceItem
              key={index}
              onClick={() => {
                const tempSelectedServicesIds = [...selectedServicesIds];
                const tempSelectedServices = [...selectedServices];

                if (tempSelectedServicesIds.indexOf(service.id) === -1) {
                  if (tempSelectedServicesIds.length < 4) {
                    tempSelectedServices.push(service);
                  } else {
                    setErrors((prev) => ({
                      ...prev,
                      upToLabel: true,
                    }));
                  }
                } else {
                  setErrors((prev) => ({
                    ...prev,
                    upToLabel: false,
                  }));

                  tempSelectedServices.splice(
                    tempSelectedServicesIds.indexOf(service.id),
                    1
                  );
                }

                setSelectedServices(tempSelectedServices);
              }}
            >
              <S.IconContainer
                src={
                  selectedServicesIds.indexOf(service.id) !== -1
                    ? `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/icon_checked.png`
                    : `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/icon_unchecked.png`
                }
              />
              <div>{service.name}</div>
            </S.ServiceItem>
          ))}
      </S.ServiceServicesContainer>
    </S.ServiceSelectionContainer>
  );
};

export type ServiceSelectionProps = {
  initialValue: CategoryItem[];
  onServiceSelected: (categoryItems: CategoryItem[]) => void;
  serviceList: ProvidedService[];
  setErrors: any;
};

export default ServiceSelection;